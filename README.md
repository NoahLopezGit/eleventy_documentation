# Documentation (standards, plans, procedures, etc) with Eleventy
Creating documentation and procedures with intractability and modularity with Eleventy.\
\
Creating documentation for testing plans and procedures can become complex when many documents are involved. Creating test plans and procedures using office products (word, excel) often have limitations on customizability and functionality. Tracking and updating changes for documentation can become complicated, especially if things are referenced in many places. Creating documentation (standards, plans, procedures, etc) in a web based format can offer more modularity of references, customizability (more freedom in how the document looks), and functionality.\
\
Eleventy enables the ability to statically generate webpages. This allows for webpages which have no server dependence (html files can exist and be opened locally anywhere) and generation of documentation in a modular style.\
In the below tree, information under _data can be thought of as reference information. Any amount of html files can reference this information and use it in a customizable way. Eleventy takes these html files and reference information and compiles a static webpage, a page with all of the information embedded which has no dependencies (meaning it can be opened from anywhere and have no server dependencies). If there are changes made to the reference information, you would only need to recompile the statically generated webpages to update them. you don't have to worry about fixing this information for multiple documents like you would have to do if they were word/excel.\
\
In the below tree 'procedures_compiled.html references/includes the different html files under procedures. These procedure htmls then reference their respective data files under _data. The basic templating structure uses nunjucks in conjunction with Eleventy.
```
C:.
│   procedures_compiled.html
│
├───procedures
│       chilli_instructions.html
│       green_bean_casserole.html
│       procedures.json
│       teriyaki_istructions.html
│
├───_data
│       chilli_instructions.json
│       green_bean_casserole_instructions.json
│       teriyaki_chicken_instructions.json
│
└───_includes
        base.njk
```
#setup
To generate the static 'procedures_compiled.html' webpage.
```
git init https://github.com/NoahLopezGit/eleventy_documentation.git
```
To install Eleventy, run:
```
npm init -y
npm i --save-dev @11ty/eleventy
```
To generate the webapge, run:
```
npx @11ty/eleventy
```
