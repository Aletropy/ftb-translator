export default class Log
{
    public static Info(message : any) : void
    {
        let date = new Date(Date.now()).toLocaleTimeString();
        console.log(`[FTB Translator - ${date}] Info: ` + JSON.stringify(message));
    }
    
    public static Warn(message : any) : void
    {
        let date = new Date(Date.now()).toLocaleTimeString();
        console.log(`[FTB Translator - ${date}] Warn: ` + JSON.stringify(message));
    }
    
    public static Error(message : any) : void
    {
        let date = new Date(Date.now()).toLocaleTimeString();
        console.log(`[FTB Translator - ${date}] Error: ` + JSON.stringify(message));
    }
}