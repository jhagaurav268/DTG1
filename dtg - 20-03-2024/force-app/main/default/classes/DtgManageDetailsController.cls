/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-15-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class DtgManageDetailsController {
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
}