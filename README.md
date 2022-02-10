# Thermometer Website

Make sure you have git, node (https://nodejs.org/en/) and VS Code installed.

Clone the git repo to your machine.

```
git clone https://github.com/paddyjoneill/thermometer_website.git
```
change into that directory

install the npm packages

```
npm install

```

to run locally

```
npm run dev
```
(to see changes from the json files you might need to ctrl c to stop the dev server and restart)

## Config Files

All pages have a config file in /data/

Each of these pages will have a page and seo in them 

```
{
    "page": "CaseStudies",
    "seo": {
        "pageTitle": "Case Studies",
        "description": "Case Studies of the Accsensum Downhole Sensors",
        "url": "https://accsensum.com/casestudies",
        "openGraphPictureUrl": ""
    }
}
```

The page is just the page type which helps the nav bar be highlighted with the right thing so shouldn't need changed.

The seo is to populate the meta tags for google and also Open Graph (The nice thing you see when you post on linked in etc where it will have picture and description)

https://simplified.co/blog/design-hacks/open-graph-image-everything-you-need-to-know/ here for image information for these.

There are also guidelines for how long titles and descriptions should be (there is no guarantee google use them but it's best to have them)

### Tools Page

```
{
    "page" : "Tools",
    "seo": {
        "pageTitle": "Tools",
        "description": "Tools by Accsensum Downhole Sensors",
        "url": "https://accsensum.com/tools",
        "openGraphPictureUrl": ""
    },
    "tools" : [
        {
            "toolName" : "T1000",
            "pictureUrl": "img/hero/thermometer-square.png",
            "downloadLink": "img/hero/thermometer.png",
            "toolMetadata" : [
                {
                    "name" : "Model",
                    "value" : "T1000"
                },
                {
                    "name" : "Max Temp",
                    "value" : "165 degC"
                }
            ]
        },
        {
            "toolName" : "T1000-BH",
            "pictureUrl": "img/hero/thermometer-square.png",
            "downloadLink": "img/hero/thermometer.png",
            "toolMetadata" : [
                {
                    "name" : "Model",
                    "value" : "T1000-BH"
                },
                {
                    "name" : "Max Temp",
                    "value" : "165 degC"
                }
            ]
        }
    ]
}
```
Should be fairly self explanatory. For more stats just add another 
```
    {
        "name" : "Model",
        "value" : "T1000-BH"
    },
```
in the toolMetadata square brackets.

VS Code should keep you right with commas etc highlighting errors.

## Blogs/CaseStudies

You will notice these have their own SEO stuff in them. As well as being pop ups I made them accessible as their own pages as you want that content available for google to find.

## Other pages

Hopefully the other pages are self explanatory.

## Image Urls

To add an image or any other file you put it in the public folder and it's referenced from there.

So if you make a chris folder in images and a picture called wells.jpg in there your picture url will be
```
"chris/wells.jpg"
```
Note the forward slashes.

## Updating

Once we have deployment set up to update the site. Navigate to the route directory.

```
git add .
git commit -m "Some text"
git push
```

Everything should just work from there. You can always look at the logs on Netlify if it didn't update. 

Or build locally
```
npm run build
```
and look for error messages.