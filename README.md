# GHBS Energy for Schools Prototype (formerly energy as a service)

## About
The Get Help Buying for Schools (GHBS) Energy for Schools (EfS) prototype
was a quickly journey to allow schools to joing DfE's V30 Energy conteract.
This can save schools money and secure stable pricing as energy is bought over 
a 30 month period.

This is a traditional journey that supports single schools joinging. Schools
that are part of a Multi-Academy Trust (MAT) currently have to joing by 
conmpleting a [GDS Form](https://www.forms.service.gov.uk/) to register their
interest. Procurement Operations will then contact the school and gather 
information by email.

Functionality that would allow MATs to onboard schools one at a time was 
deployed but the decision was made to roll it back. This let a user choose
the TRUST then a school within the trust to onboard as a way to bypass the
problem where users may work for a given trust but not their DfE Sign in
account may not be associated with one or more of the trust's schools.

The prototype only covers the school facing parts of the journey, it does
not acknowledge the subsequent work procurement operations would do.

This documentation is opinionated and speaks to how I would want to maintain a 
prototype over time to support user research and devlopers. You may want to work
differently.

## Installing the prototype

1. Use the terminal and the GitHub provided code to clone it to your machine.
2. Install an appropriate version of node
3. Use `npm run dev` to start the prototype locally
4. Go to the local host address shown in terminal to view the site

### Further information

The [GDS Design system](https://design-system.service.gov.uk/contact/) has 
guidance and links to further support with the prototype kit. If you have access
to cross GOV Slack then there is a strong community there that can help. Even 
if DfE does not use Slack you can still join the cross GOV Slack instance with
a valid DfE email.

## Maintaining the prototype

The prototype uses a combination of views and routes files to allow multiple 
versions to exist in the same repo without the issue of cross-over. 

At a high level:
- routes files describe the logic used when loading and posting to a page
- views describe the content of a page
- SCSS files describe how components appear

We pull the latest version of the main branch then use a discreet new branch for 
each piece of new work. We do not push directly to the main branch
as this makes disaster recovery much harder. Pushing directly to the main branch
makes is very difficult to support multiple concurrent items of work at once, 
it also means it is much harder to roll back code if it is ditched mid sprint.


### Incrementing the prototype for a new sprint

The prototype contains all the previous version in the single repository. This
means that anyone can look at previous versions to understand what has changed.

When delivering work for a new sprint you should:

1. make a new branch for the ticket, branch names start with the tick ID e.g.
  `ES-101-Short-description-of-ticket`.
2. Copy the latest app routes folder and inrement it. E.g. copy `v5` and rename it
  `v6`
3. Open the relevant routing.js file and update the line `var version = "v5";` 
  to be `var version = "v6";` this will update all the router get and post 
  commands to use the new routing folder
5. Copy the latest app views folder and inrement it. E.g. copy `v5` and rename it
  `v6`
6. Open the `routes.js` files in the app folder. Copy the last line that should
  look like `require('./routes/v5/routing.js')(router);` and paste it below. 
  Update the line to point to the latest routing folder e.g. `…/v6/…`
7. Open index.html and copy the block of code from the h2 down to the `</ul>` and
  paste it above, update the header to the new version number, update any links
  to use the new version number. Update any description of the sprints' work and 
  links to specific tickets to point to the new work you are doing. 
8. Run the prototype and click on the button/link to the load the latest version
  Confirm it is using the expected URL and works correctly.
9. Commit and push the work to GitHub
10. Open and complete a pull request (PR) to merge in the changes.
11. In terminal, checkout the main branch and pull any changes
12. You are now ready to make a new branch for new work and repeat the above 
  steps to make a new branch, add work to commits, push multiple commits, then
  open and complete pull requests to merge work into the main branch.

### Pushing changes to the live version of the prototype
The prototype uses Heroku for hosting and is set to look for merges on the main
banch. When a merge occurs on the main branch, Heroku will immediately get the 
latest version of the main branch and rebuild and deploy the code. After a 
minuite or two the change should be live.

## Recording changes
When an change for the prototype is live, we notify the team about the changes
on he main chat channel. It is also possible to record a call and share your 
screen to show the changes.

Important changes are recorded on the Design Histories for GHBS. This uses the
common Strappi CMS that all of DfE record work on. Help and guidance can be 
found on the interaction design commuity channel in Teams

## The prototype as a source of truth

We think about design, and code when making changes to the prototype. We 
consider and demonstate best practice for accessibility and share new code with
developers so they can learn how we have delivered a change then decide if they
can copy our code or modify it.

We can make special versions of the prototype to share with devlopers. When this
happens we are explicit as to what parts/pages/URLs are considered a source of 
truth. 

Generally speaking the prototype is accurate as of the last update, and we are
moving to make the whole codebase accurate after the prototype was brought back
to life.
