const { program } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const hbs = require('handlebars');
const fse = require('fs-extra');
const dayjs = require('dayjs');
const path = require('path');
const ora = require('ora');
const markdown  = require('helper-markdown');

const version = '0.0.1';
program.version(version);
program
  .command('gen')
  .description('gen markdown with template')
  .option('-t, --template <name>', 'specify markdown template')
  .action((option) => {
    if (option.template) {
      console.log(chalk.green(`use template ${option.template}`));
    } else {
      console.log(chalk.green('use default markdown template'));
    }
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: '标题',
          validate: (title) => {
            if (!title.trim()) {
              return false;
            }
            return true;
          },
        },
        {
          type: 'input',
          name: 'id',
          message: '标题 id',
          validate: (id) => {
            if (!id.trim()) {
              return false;
            }
            return true;
          },
        },
        {
          type: 'input',
          name: 'category',
          message: '分类',
          validate: (category) => {
            if (!category.trim()) {
              return false;
            }
            return true;
          },
        },
        {
          type: 'checkbox',
          name: 'tag',
          message: '标签',
          default: 'web',
          choices: ['web', 'JavaScript', 'http'],
        },
        {
          type: 'input',
          name: 'desc',
          message: '描述',
          default: '详细点击',
        },
      ])
      .then(async (answer) => {
        const result = { ...answer, date: dayjs().format('YYYY/MM/DD') };
        const currentPath = path.resolve();
        const tpl = await fse.readFile(path.resolve(__dirname, './template/default.md'));
        // hbs.registerHelper(markdown);
        const content = hbs.compile(tpl.toString())(result);
        const spin = ora('waiting...').start();
        try {
          await fse.writeFile(
            path.resolve(currentPath, `./${result.title}.md`),
            content
          );
          spin.succeed('succeed!');
        } catch (e) {
          spin.fail('failed!');
        }
      });
  });

program.parse();
