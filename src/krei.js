/**
 * Krei is a plugin driven project intializer tool.
 */
export class Krei
{

}

export class KreiPlugin
{
  /** @return a String describing the function of the plugin. */
  get description()       { return this._description; }

  /** @param {String} value the new description of this plugin. */
  set description(value)  { this._description = value; }
}
