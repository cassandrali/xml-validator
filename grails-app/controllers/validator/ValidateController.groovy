package validator

import grails.transaction.Transactional

@Transactional
class ValidateController {

	def ValidateService

    def index() {

    	def rss = params.rss
    	def file = request.getFile('csv')
    	def mapSize
    	def feeds
        def valid
    	def results
    	def feedMap
        // println "PRINT RSS" + rss 

		if (!file.empty) {
    		def file1 = file.inputStream.text
    		//println(file1)
    		//println(file1.getClass())
    		feedMap = ValidateService.validateCSV(file1); // feedMap is a java.util.HashMap
    		mapSize = feedMap.size()
    		feeds = feedMap.keySet() as List
    		results = feedMap.values() as List
    		/*for ( item in feedMap ) {
    			feeds << item.key
    			results << item.value
    		}*/

    		results.each {
    			println "ValidateController.index -> ${it}"
    		}
    	}

    	else if (file == null || (file.empty && !rss.equals(""))) { //rss is not empty
    		valid = ValidateService.validate(rss)
            println valid
    	}

		[rss: rss, valid: valid, mapSize: mapSize, feeds: feeds, results: results, feedMap: feedMap] // use ${rss} and ${valid} in the view 
    }

    def csv() {
    	def valid = validateService.validateCSV()
    }
}
