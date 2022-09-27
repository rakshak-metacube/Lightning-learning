public with sharing class insertContactApexWeb {
   
    @AuraEnabled
    public static void saveContactRecord(Contact con){
        System.debug('acc--'+con);
        try{
            insert con;
        }
        catch(Exception ex) {
            System.debug(ex.getMessage());
            throw new AuraHandledException(ex.getMessage());
            
        }
    }
}