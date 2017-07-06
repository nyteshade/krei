# krei
Plug and play project generator framework.

# notes
Krei means create in Esperanto. Project coming soon. This repo reserves the name in both npm and github. 

## TODO
- [ ] Use 'babylon' and 'babel-generator' to parse javascript code when .krei plugins need to merge code with existing javascript.
- [ ] Parse project directory and convert all .js files into ASTs (unless .gitignore'd). Use this to search and find things such as where `var app = express()` are defined and where places like `app.use()` are being invoked. This should allow an easy way to add new middleware and/or remove bits others have added.
- [ ] Write AST parsers to do things like add SASS or LESS to an existing express application using the methods described above. Each being a separate parser/plugin type functionality
- [ ] Merge .gitignore rules
- [ ] Merge package.json entries (merging where already existing)
- [ ] Allow the indexed and ordered application of multiple krei compatible plugins one, after another.
- [ ] Allow the saving of a configuration or the merging of a successful combination of krei plugins into one that can be reused later.
- [ ] Allow referencing of krei plugins via npm modules, github pages, local filesystem archives (.zip, .tar.gz, ...?)
- [ ] Allow base git initialization to occur
- [ ] Allow base npm initialization to occur
- [ ] Allow clone of existing repo as a base before applying krei plugins
- [ ] Provide an electron GUI app

## Krei Plugin Layout
Merely a brain dump, not even a spec yet.

```json
{
  ".krei": {
    "desc": "directory containing config items to merge and rules to follow",
    ".babelrc": "rules to intelligently merge for babel",
    ".flowconfig": "rules to intelligently merge for flowtype",
    ".gitignore": "rules to blindly append to existing .gitignore files or act as a basis",
    "package.json": "rules to intelligently merge and configure",
    "vars.package.json": "custom input to query from the user for use in configuring .krei/package.json before merging"
  },
  "...": "all other files that will be blindly merged on top of the file tree, overwriting those beneath this order"
}
```
