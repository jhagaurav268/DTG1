/**
* @description       : 
* @author            : ChangeMeIn@UserSettingsUnder.SFDoc
* @group             : 
* @last modified on  : 03-18-2024
* @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class DtgManageDetailsController {
    private static final Blob key = EncodingUtil.convertFromHex('00112233445566778899AABBCCDDEEFF00112233445566778899AABBCCDDEEFF');
    private static final Blob iv = EncodingUtil.convertFromHex('00112233445566778899AABBCCDDEEFF');
    private static Map<String, Schema.SObjectField> fieldMap = new Map<String, Schema.SObjectField>();

    @AuraEnabled(cacheable=true)
    public static List<Map<String, String>> getMultiSelectPicklistFieldValues(String context) {
        List<Map<String, String>> listOfPicklistMap = new List<Map<String, String>>();
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        Schema.sObjectType sObjType;
        String sObjApiName;
        if(String.isNotBlank(context)){
            switch on context {
                when 'P1 Project Proposal' {
                    sObjType = gd.get('P1_Project_Proposal__c');
                }
                when else {
                    sObjType = null;
                }
            }
        }        
        try { 
            if(sObjType != null){           
                sObjApiName = sObjType.getDescribe().getName(); 
            }               
            Schema.DescribeSObjectResult describeResult = Schema.getGlobalDescribe().get(sObjApiName).getDescribe();
            Schema.DescribeFieldResult fieldResult = describeResult.fields.getMap().get('Project_Lead_1_Degree__c').getDescribe();
            
            if (fieldResult != null && (fieldResult.getType() == Schema.DisplayType.MULTIPICKLIST)) {
                List<Schema.PicklistEntry> picklistEntries = fieldResult.getPicklistValues();                
                for (Schema.PicklistEntry picklistEntry : picklistEntries) {
                    Map<String,String> picklistMap = new Map<String,String>{
                        'label' => picklistEntry.getLabel(),
                            'value' => picklistEntry.getValue()
                            };
                                listOfPicklistMap.add(picklistMap);
                }
            }
            
        } catch (Exception ex) {
            // Handle any exceptions, such as invalid object or field API names
            System.debug('Error retrieving picklist values: ' + ex.getMessage());
        }
        return listOfPicklistMap;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Map<String, String>> getPicklistFieldValues(String context, String apiName) {
        List<Map<String, String>> listOfPicklistMap = new List<Map<String, String>>();
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        Schema.sObjectType sObjType;
        String sObjApiName;
        if(String.isNotBlank(context)){
            switch on context {
                when 'P1 Project Proposal' {
                    sObjType = gd.get('P1_Project_Proposal__c');
                }
                when else {
                    sObjType = null;
                }
            }
        }        
        try { 
            if(sObjType != null){           
                sObjApiName = sObjType.getDescribe().getName(); 
            }               
            Schema.DescribeSObjectResult describeResult = Schema.getGlobalDescribe().get(sObjApiName).getDescribe();
            Schema.DescribeFieldResult fieldResult = describeResult.fields.getMap().get(apiName).getDescribe();
            
            
            if (fieldResult != null) {
                List<Schema.PicklistEntry> picklistEntries = fieldResult.getPicklistValues();                
                for (Schema.PicklistEntry picklistEntry : picklistEntries) {
                    Map<String,String> picklistMap = new Map<String,String>{
                        'label' => picklistEntry.getLabel(),
                            'value' => picklistEntry.getValue()
                            };
                                listOfPicklistMap.add(picklistMap);
                }
            }
            
        } catch (Exception ex) {
            // Handle any exceptions, such as invalid object or field API names
            System.debug('Error retrieving picklist values: ' + ex.getMessage());
        }
        return listOfPicklistMap;
    }
    
    @AuraEnabled
    public static Map<Object,Object> upsertData(Map<String,Object> data, Id recordId, String context){
        Boolean isSuccess = true;
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        Schema.sObjectType sObjType;
        sObject sobj;
        
        List<String> skipFields;
        
        switch on context {
            when 'P1 Project Proposal' {
                sObjType = gd.get('P1_Project_Proposal__c');
                sobj = sObjType.newSObject();
                skipFields = new List<String> {'IsDeleted','Name','Total_Project_Funding__c'};
                    }   
            when else {
            }
        }
        
        Map<String, Schema.SObjectField> fieldTypeMap = sObjType.getDescribe().fields.getMap();
        
        for(String fieldName : data.keySet()){
            if(skipFields.contains(fieldName)) continue;
            Schema.SObjectField field = fieldTypeMap.get(fieldName);
            if(String.isNotblank(String.valueOf(field))){
                Schema.DisplayType fieldDataType = field.getDescribe().getType();
                System.debug('fieldDataType ' + fieldDataType);
                System.debug('field ' + field);
                System.debug('fieldName ' + fieldName);
                if(fieldDataType == Schema.DisplayType.Currency || fieldDataType == Schema.DisplayType.Double || fieldDataType == Schema.DisplayType.Integer || fieldDataType == Schema.DisplayType.Boolean){
                    String strValue; 
                    if(data.get(fieldName) == 0){
                        strValue = null;
                    }else{
                        strValue  = (String) data.get(fieldName);
                    }
                    
                    if(String.isNotBlank(strValue)){
                        sobj.put(fieldName, Decimal.valueOf(strValue));
                    }else{
                        sobj.put(fieldName, null);
                    }
                }else if(Schema.DisplayType.MultiPicklist === fieldDataType || Schema.DisplayType.String == fieldDataType || Schema.DisplayType.Picklist == fieldDataType || Schema.DisplayType.TextArea == fieldDataType ||  Schema.DisplayType.URL == fieldDataType || Schema.DisplayType.Reference == fieldDataType || Schema.DisplayType.PHONE == fieldDataType || Schema.DisplayType.EMAIL == fieldDataType || Schema.DisplayType.date == fieldDataType || Schema.DisplayType.Boolean == fieldDataType ){
                    sobj.put(fieldName,(String) data.get(fieldName));
                }else if(Schema.DisplayType.Boolean == fieldDataType){
                    Boolean booleanValue  = (Boolean) data.get(fieldName);
                    sobj.put(fieldName,booleanValue);
                }
            }
        }
        if(recordId != null){
            sobj.put('Id', recordId);
        }
        System.debug('upsert...'+sobj);
        Database.UpsertResult result = database.upsert(sobj);
        if(!result.isSuccess()) {
            isSuccess = false;
        }else{
            recordId = result.getId();
        }
        
        if(context == 'P1 Project Proposal' && isSuccess) {
            String nextCollaborator = (String)sobj.get('Next_Collaborator__c');
            if(String.isNotBlank(nextCollaborator)) {
                String encryptedToken = encrypt(recordId);
                sendEmail(nextCollaborator, encryptedToken);
            }
        }
        return new Map<Object,Object>{'success' => isSuccess , 'id' => recordId};
            }
    
    private static String encrypt(String input) {
        Blob data = Blob.valueOf(input);
        Blob encryptedData = Crypto.encrypt('AES256', key, iv, data);
        
        String encryptedString = EncodingUtil.base64Encode(encryptedData);
        return encryptedString;
    }
    
    private static String decrypt(String encryptedString) {
        Blob encryptedData = EncodingUtil.base64Decode(encryptedString);
        
        Blob decryptedData = Crypto.decrypt('AES256', key, iv, encryptedData);
        
        String decryptedString = decryptedData.toString();
        return decryptedString;
    }
    
    private static void sendEmail(String recipient, String encryptedToken) {
        String emailContent = 'Your encrypted token: ' + encryptedToken;
        List<OrgWideEmailAddress> lstEmailAddress=[select Id from OrgWideEmailAddress WHERE Address='nandkishor@cloudsciencelabs.com'];
        
        Messaging.SingleEmailMessage mymail = new Messaging.SingleEmailMessage();
        String[] toaddresses = new String[] {recipient}; 
            
            mymail.setToAddresses(toAddresses);
        mymail.setSubject('Here is you token as a next collaborator');
        mymail.setPlainTextBody(emailContent);
        mymail.setHtmlBody(emailContent);
        mymail.setOrgWideEmailAddressId(lstEmailAddress[0].Id);
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mymail });
    }
    
    @AuraEnabled(cacheable=true)
    public static List<ContentDocument> getRelatedFiles(Id loiId) {
        List<ContentDocument> files = new List<ContentDocument>();
        for(ContentDocumentLink link : [SELECT ContentDocumentId, ContentDocument.Title 
                                        FROM ContentDocumentLink 
                                        WHERE LinkedEntityId = :loiId]) {
            files.add(new ContentDocument(Id = link.ContentDocumentId, Title = link.ContentDocument.Title));
        }
        return files;
    }

    @AuraEnabled(cacheable=true)
    public static Map<Object,Object> fetchRecordDetails(Map<String, Object> filter, String context){
        try {
            switch on context {
                when 'P1 Project Proposal' {
                    Id recordId = (Id) filter.get('token');
                    System.debug('recordId ' + recordId);
                    if(recordId != null){
                        System.debug('Query '+ buildProgramQuery(' WHERE Id =: recordId '));
                        return new Map<Object,Object>{ 'data' => new List<SObject>{database.query(buildProgramQuery(' WHERE Id =: recordId '))},'success' => true};
                    }else{
                        
                    }
                }
                
                when else {}
            }
            return new Map<Object,Object>();
        } catch (Exception ex) {
            throw new AuraHandledException(ex.getMessage() + ex.getlinenumber());
        }   
    }

    private static String buildProgramQuery(String whereCondition){
        Schema.SObjectType sobjectTypeObj = Schema.getGlobalDescribe().get('P1_Project_Proposal__c');
        Schema.DescribeSObjectResult obj = sobjectTypeObj.getDescribe(); 
        
        String sObjName = sobjectTypeObj.getDescribe().getName();
        fieldMap = Schema.getGlobalDescribe().get(sObjName).getDescribe().fields.getMap();
        Set<String> SobjectFields = fieldMap.keySet();
        List<String> fieldsInList = new List<String>(SobjectFields);
        return 'SELECT ' + String.join(fieldsInList, ',') + ' FROM '+ sObjName + ' ' + whereCondition;
    }
}