import chalk from 'chalk';
import { replaceInFileSync } from "replace-in-file";

const results = replaceInFileSync({
  files: "build/web/**/*.js",
  from: /from [",']react-native[",']/g,
  to: "from 'react-native-web'"
})

const modified = results.filter(x => x.hasChanged === true)

console.log(`

    Modified ${chalk.cyan(modified.length)} files to import from ${chalk.cyan('react-native-web')}

`)