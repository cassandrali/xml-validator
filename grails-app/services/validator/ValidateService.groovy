package validator

import grails.transaction.Transactional

@Transactional
class ValidateService {

    def validate(def field) {
		
		validator.FurtherValidation.validate(field);
    }

    def validateCSV(def field1) {
    	validator.FurtherValidation.validateCSV(field1);
    }
}
