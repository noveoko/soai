import json

file = open('school-of-ai-export.json')

countries = {}
with open('deans_page.html','w') as outfile:
    for chapter in json.load(file):
        if chapter:
            try:
                country = chapter['country']
                city = chapter['city']
                if country not in countries:
                    countries[country] = {}
                    try:
                        countries[country][city] = {'social_media':chapter['social_media'],
                                          'lat_long':[chapter['lat'],chapter['lng']]}
                    except Exception as ee:
                        countries[country][city] = {'lat_long':[chapter['lat'],chapter['lng']]}
                else:
                    try:
                        countries[country][city] = {'social_media':chapter['social_media'],
                                          'lat_long':[chapter['lat'],chapter['lng']]}
                    except Exception as ff:
                        countries[country][city] = {'lat_long':[chapter['lat'],chapter['lng']]}                        
            except Exception as ee:
                print(ee)

with open('global_chapters.html','w') as outfile:
    top_nav = []
    for country, data in countries.items():
        top_nav.append(f"[{country}](#{country})\n")
    nav_done = "".join(sorted(top_nav))
    outfile.write(f"{nav_done}\n\n")

    for country, cities in countries.items():
        outfile.write(f"# {country}\n")
        for city, data in cities.items():
            outfile.write(f"### {city}\n")
            outfile.write("Social Media Accounts\n\n")
            try:
                for k,v in data['social_media'].items():
                    outfile.write(f"[{k.title()}]({v})\n\n")
            except Exception as cc:
                outfile.write("**No social accounts**\n\n")