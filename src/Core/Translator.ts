import { stringify } from "querystring";
import { TranslationMode } from "../interfaces/Translation";
import Log from "./Log";

export default class Translator
{
    private _mode : TranslationMode;
    private _path : string;

    public constructor(mode : TranslationMode, path : string)
    {
        this._mode = mode;
        this._path = path;

        if(this._mode == TranslationMode.LangFile)
            Log.Info("Starting translation for language file: " + path);
        else
            Log.Info("Starting translation for snbt files: " + path);
    }

    public TranslateAll() : void
    {
        // TODO
    }
}