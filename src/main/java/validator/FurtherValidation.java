package validator;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Writer;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.rometools.rome.feed.synd.SyndFeed;
import com.rometools.rome.io.SyndFeedInput;

/**
 * 
 * @author dthorpe
 *
 */
public class FurtherValidation {
	

	private static final int CONNECTION_TIMEOUT = 60000;
	private static final int READ_TIMEOUT = 60000;
	private static final long ERROR_BASE = 400l;

	private final static Logger logger = LoggerFactory.getLogger(FurtherValidation.class);

	public static String validate(String url) {
		//String filename = "Feeds.txt"; 
		try {
			/*BufferedReader br = new BufferedReader(new FileReader(filename));
			String line;
			while ((line = br.readLine()) != null) {
				System.out.println(line);*/
				new FurtherValidation().getFeed(url); //each line is the argument to this
				return "This feed was successfully checked as well-formed XML!";
			//}
		}
		catch (RuntimeException e) {
			return e.getMessage();
		}
		catch (Exception e) {
			return e.getMessage();
		}
	}
	
	public static Map<String, String> validateCSV(String file) throws IOException {
		Map<String, String> feedResult = new HashMap<String, String>();
		//String csvFile = "/Users/mkyong/csv/country.csv";
		//BufferedReader br = null;
		//String line = "";
		//ArrayList<String> validatedFeeds = new ArrayList<String>();
		//Writer writer = new BufferedWriter(new FileWriter("output.txt"));

		String[] eachLine = file.split("\n");
		for (int i = 0; i < eachLine.length; i++) {
			String[] cvs = eachLine[i].split(",");
			String rss = cvs[0];
			try {
				new FurtherValidation().getFeed(rss);
				feedResult.put(rss, "Valid");
				//writer.write(rss + "[true]");
				//validatedFeeds.add(rss + ",true");
			} catch (RuntimeException e) {
				feedResult.put(rss, e.getMessage());
			} catch (Exception e) {
				feedResult.put(rss, e.getMessage());
				//writer.write(rss + "[" + e.getMessage() + "]");
				//validatedFeeds.add(rss + "," + e.getMessage());
			}
		}
		return feedResult;
	}

	public SyndFeed getFeed(final String url) throws Exception {
	
		SyndFeed feed = null;
		InputStreamReader inputStream = null;

		inputStream = getStream(url);

		SyndFeedInput input = new SyndFeedInput();
		feed = input.build(inputStream);
		
		if (inputStream != null) {
			
			try {
				inputStream.close();
			}
			catch(IOException ex) {
				logger.error(ex.getMessage());
			}

		}
		return feed;			
	}

	private InputStreamReader getStream(final String url) throws IOException {

		HttpURLConnection urlConnection = getHttpConnection(url);
		
		boolean isRedirect = false;
		
		int status = urlConnection.getResponseCode();
		if (status != HttpURLConnection.HTTP_OK) {
			if (status == HttpURLConnection.HTTP_MOVED_TEMP
				|| status == HttpURLConnection.HTTP_MOVED_PERM
					|| status == HttpURLConnection.HTTP_SEE_OTHER) {

				isRedirect = true;

			}
		}
		
		if (status >= ERROR_BASE) {
			throw new RuntimeException("Http error " + status + ": " + urlConnection.getResponseMessage());
		}

		if (isRedirect) {
			String newUrl = urlConnection.getHeaderField("Location");

			logger.info("Redirecting to :"  + newUrl);
			urlConnection = getHttpConnection(newUrl);
			
			if (urlConnection.getResponseCode() >= ERROR_BASE) {
				throw new RuntimeException("Http error " + status + ": " + urlConnection.getResponseMessage());
			}
		}

		StringBuilder sb = getFileContents(urlConnection.getInputStream());
		
		String document = sb.toString();
		
		//System.out.println(document);
		
		if (possibleHtmlDoc(document)) {
			throw new RuntimeException("Possible HTML document");
		}

		InputStreamReader reader = new InputStreamReader(new ByteArrayInputStream(document.getBytes()));
		
		return reader;
	}
	
	private StringBuilder getFileContents(final InputStream stream) throws IOException {

		BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(stream));

		StringBuilder sb = new StringBuilder();

		String line;

		boolean firstLine = true;
		while ((line = bufferedReader.readLine()) != null) {

			if (firstLine) {
				line = line.replaceFirst("^([\\W]+)<","<");
				firstLine = false;
			}
				
			sb.append(line);

		}

		try {
			bufferedReader.close();
		}
		catch(IOException ex) {
			ex.printStackTrace();
		}
		
		return sb;
	}
	
	private HttpURLConnection getHttpConnection(final String url) throws IOException, MalformedURLException {

		HttpURLConnection urlConnection = (HttpURLConnection) new URL(url).openConnection(); //Bad Padding Exception "Decryption error" sometimes
		urlConnection.addRequestProperty("Accept-Language", "en-US,en;q=0.8");
		urlConnection.addRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36");
		urlConnection.addRequestProperty("accept","application/json");		
		urlConnection.setReadTimeout(READ_TIMEOUT);
		urlConnection.setConnectTimeout(CONNECTION_TIMEOUT);
		
		return urlConnection;
	}
	
	private boolean possibleHtmlDoc(final String doc) {
	
		return doc.contains("<!DOCTYPE html>") || doc.contains("<!doctype html>") || doc.contains("</html>");
	}
	
}

