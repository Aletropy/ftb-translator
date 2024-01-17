import Log from "./Core/Log";
import Translator from "./Core/Translator";
import { TranslationMode } from "./interfaces/Translation";

const DEBUG_LANG_PATH = "./en_us.json";
const DEBUG_SNBT_PATH = "./quests/";

class Application
{
    private static _debug = false;
    public static get Debug() { return this._debug; }

    public static async Main(args : string[])
    {
        let mode : TranslationMode;
        let path : string;

        if(args[0] == "debug")
        {
            this._debug = true;
            Log.Warn("Debug Mode Active! If not intended please remove the first argument 'debug'.");

            mode = this.GetModeArgument(args, 1);
            path = mode == TranslationMode.LangFile ? DEBUG_LANG_PATH : DEBUG_SNBT_PATH;
        }
        else
        {
            mode = this.GetModeArgument(args);
            path = args[1];
        }

        let translator = new Translator(mode, path);

        translator.TranslateAll();
    }

    private static GetModeArgument(args : string[], index : number = 0) : TranslationMode
    {
        let modeChoice = args[index];

        if(modeChoice == "lang" || modeChoice == "snbt")
        {
            return modeChoice == "lang" ? TranslationMode.LangFile
                : TranslationMode.SnbtFile;
        }
        else
        {
            Log.Error("The second argument must be 'snbt' or 'lang'");
            process.exit(1);
        }
    }
}

(async () => {
    await Application.Main(process.argv.slice(2));
})();