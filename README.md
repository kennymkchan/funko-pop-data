# Funko Pop Database / Funko Pop API

## Background

This repo contains a database in [JSON format](https://www.json.org/json-en.html) for all the Funko Pop data. When working on a small project related to Funko Pops, it was noticed that there was no open-source API to obtain Funko Pop data. The best resource was [Pop Price Guide](https://www.poppriceguide.com/) but the data was still very inaccessible.

Since I was not able to find a complete database of all the Funko Pops for public use, I decided to scrape various websites on the internet to obtain a complete list of Funko pops that are available. In this repo, you will find a JSON file that contains over 22,000 entries of Funko Pop products.

All the data is open-source and available for any one to use and build on top of. I will be regularly building upon this list — likely every week. Please feel free to use the data to your liking. This project has a [MIT license](https://github.com/kennymkchan/funko-pop-data/blob/master/LICENSE)

## Data Structure

Currently, the data for each Funko Pop is captured with the following data:

```json
{
  handle: ### A unique handle generated based on the title of the pop and using a `handleize` method.
  image: ### A URL containing an image of what the Funko Pop looks like
  title: ### The name of the Funko Pop
}
```

If you wish to see more attributes or if they would be useful, please make an issue and I will try to add the data.

## Data Scraping

I will be open sourcing the data scraper, but there is currently no ETA on when that might happen. For now, if you're missing any information, please contact kennymkchan on Github.
