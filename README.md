# Funko Pop Database / Funko Pop API

## Last Updated

January 3, 2021 — 5:00PM EST

## Background

This repo contains a database in [JSON format](https://www.json.org/json-en.html) for all the Funko Pop data. When working on a small project related to Funko Pops, it was noticed that there was no open-source API to obtain Funko Pop data. The best resource was [Pop Price Guide](https://www.poppriceguide.com/) but the data was still very inaccessible.

Since I was not able to find a complete database of all the Funko Pops for public use, I decided to scrape various websites on the internet to obtain a complete list of Funko pops that are available. In this repo, _you will find a JSON file that contains over 23,000 entries of Funko Pop products._

All the data is open-source and available for any one to use and build on top of. I will be regularly building upon this list — likely every week. Please feel free to use the data to your liking. This project has a [MIT license](https://github.com/kennymkchan/funko-pop-data/blob/master/LICENSE).

Please use the data responsibly. This has been a fun project to complete for the Funko Community.

## Data Structure

### JSON Data

Currently, the data for each Funko Pop is captured with the following data:

```
{
  handle: ### A unique handle generated based on the title of the pop and using a `handleize` method.
  image: ### A URL containing an image of what the Funko Pop looks like
  title: ### The name of the Funko Pop
  series: ### Array of series the Funko Pop is part of. I.E ["Pop! Animation","Pop! Vinyl","Emerald City Comic Con 2017"]
}
```

If you wish to see more attributes or if they would be useful, please make an issue and I will try to add the data. Alternatively, feel free to open up a PR.

### CSV Data

Aside from the JSON data, the exact same data is exposed via CSV in the `funko_pop.csv` file. [All the Funko Pop data has also been uploaded to a public Google Sheet](https://docs.google.com/spreadsheets/d/15aSFbnueiiMAdp2szKqvLtMvpIpjGddcPkhSGS44BqU/edit?usp=sharing).

## Data Scraping

I have added the data scraping script that I have been using. It's not perfect but does the job. Some of the parameters such as the `sleep` can probably be tweaked depending on the device you are using. If you wish to run the script, the following will help you get started:

```
npm install
node index.js
```

After running the script, the funko_pop.json file will be created. If you wish to export that to a CSV format, you can run:

```
node json-converter.js
```

## Contributing

If you have improvements, open up a PR and I'll take a look. Actively looking for people to potentially improve this scraper.
