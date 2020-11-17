# Component Hierarchy

![Component Hierarchy]('./images/component-hierarchy.png')
Format: ![component hierarchy]

## App.js
- Set State:
  - General Categories 
  - Category Gifts List
  - Individual Gift Details
  - Favorites
- Set Routes
- Pass Props

## Header
- Description: Sticky header that is on every page that is rendered on the app.
  - Logo/App Name that takes you to the home page
  - Nav Bar with links to each category page (possibly a drop down menu), favorites, etc.

## Home
- Description:  This will be the landing page that the user sees when they enter our site.
  - Each gift category will have a picture and a title that is a clickable link - this take you to the category gift list page

## Gift List
- Description:  This will the page where the user will go once they click on the category they want to browse.  This will show a list of gifts that are in that category.
  - Each gift will have a picture and a title that will be a link that takes them to their individual gift page

## Gift Details
- Description:  This will show the details of each gift.
  - Name
  - Picture
  - Image
  - Description
  - Categories
  - Link to Buy
  - Favorites Button

## Add Gift Form
- Description:  This will be the page (or modal) where the user can add a gift of their own to the database.  They will need to complete all the required items listed in the schema.

## Favorites
- Description:  This will be where the user keeps track of the gifts they want to buy
  - Each gift that is added has a picture and title
  - Each gift is a link to the gift details page

