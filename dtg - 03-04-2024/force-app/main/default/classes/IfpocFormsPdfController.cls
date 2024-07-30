public class IfpocFormsPdfController {

    public String recordId { get; set; }
    public String context { get; set; }
    public List<P1_Project_Proposal__c> recordFields { get; set; }
    //public List<Work_Plan__c> workPlanData { get; set; }
    public boolean isP1ProjectProposal{ get; set; }
    //public boolean isWorkPlan{get;set;}
    private static Map<String, Schema.SObjectField> fieldMap = new Map<String, Schema.SObjectField>();
    public IfpocFormsPdfController() {
        recordId = ApexPages.currentPage().getParameters().get('id');
        context = 'P1 Project Proposal';
            //ApexPages.currentPage().getParameters().get('context');
        System.debug('Context =>'+context);
        if(context == 'P1 Project Proposal'){
            recordId = 'a0FD40000021NNCMA2';
            recordFields =	database.query(buildP1PrposalQuery(' WHERE ID =: recordId'));
            isP1ProjectProposal = true;
            String myGeneratedFile = 'ProgramReportPDF.pdf';
            ApexPages.currentPage().getHeaders().put('content-disposition', 'inline; filename='+myGeneratedFile);
            System.debug('recordFields =>'+recordFields);
        }
           /* else if(context == 'WorkPlan'){
            system.debug('WorkPlan-->'+context);
            workPlanData =	database.query(buildWorkPlanQuery(' WHERE ID =: recordId'));
            isWorkPlan = true;
            String myGeneratedFileName = 'WorkPlanPDF.pdf';
            ApexPages.currentPage().getHeaders().put('content-disposition', 'inline; filename='+myGeneratedFileName);
            System.debug('workPlanData =>'+workPlanData);
            
        }*/
        
    }
    
    public static String buildP1PrposalQuery(String whereCondition){
        Schema.SObjectType sobjectTypeObj = Schema.getGlobalDescribe().get('P1_Project_Proposal__c');
        Schema.DescribeSObjectResult obj = sobjectTypeObj.getDescribe(); 
        String sObjName = sobjectTypeObj.getDescribe().getName();
        fieldMap = Schema.getGlobalDescribe().get(sObjName).getDescribe().fields.getMap();
        Set<String> SobjectFields = fieldMap.keySet();
        List<String> fieldsInList = new List<String>(SobjectFields);
        return 'SELECT ' + String.join(fieldsInList, ',') + ' FROM '+ sObjName + ' ' + whereCondition;
      }
}