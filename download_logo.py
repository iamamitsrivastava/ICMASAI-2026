import urllib.request

req = urllib.request.Request("https://upload.wikimedia.org/wikipedia/commons/4/4f/UNIVERSITASTEKNOKRAT.png", headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    with open("public/assets/partners/universitas-teknokra-indonesia-logo.png", "wb") as out_file:
        out_file.write(response.read())
