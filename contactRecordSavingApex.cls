public class contactRecordSavingApex {
    @AuraEnabled
    public static Contact createRecord(Contact cnt) {
        if(cnt != null){
             insert cnt;   
        }
        return cnt;
    }
}