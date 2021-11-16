# Link to the portfolio: 

https://gajjarkaran.netlify.app/


Open your terminal, and enter the following command (you should have Node.js installed):

**npm install -g gatsby-cli**
The -g flag installs Gatsby globally on your system, which makes sure Gatsby has access to the proper dependencies. Gatsby offers a few partially built starter sites, pre-configured to get your project up and running faster.

**npm install gatsby-cli --save**
This command inserts gatsby into the dependencies of your package.json file, which tells Netlify what toolchain it needs to build your site. If you named your project gatsby, npm refuses to add gatsby as a dependency of itself. Open the /src/pages directory. Inside that directory, you should see several JavaScript files, which are the pages of your website and they are also React components.

It’s time to display your content. Run the following command:

**gatsby develop**
Gatsby compiles your site, creates an internal server at http://localhost:8000, and watches for changes.
