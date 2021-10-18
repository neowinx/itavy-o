# Itavy-o

![Itavy-o logo](Icon.png)

Browser extension to add a more secure input of the pin in [ itau.com.py ](https://www.itau.com.py)

It masks the input of the pins with asterisks "*" to avoid keyloggers
and potential eavesdroppers to catch the pin when clicking the numbers

## Install

### Firefox

Go to the [Mozzilla Addons](https://addons.mozilla.org/en-US/firefox/addon/itavy-o/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) and click on the **Add to Firefox** button

### Build yourself

Just zip the adecuate files or use something like [web-ext](https://www.npmjs.com/package/web-ext) top help you with these tasks

```bash
npm i -g web-ext
web-ext build
```

and your addon should be created on the *web-ext-artifacts* directory, like `web-ext-artifacts/itavy-o-0.0.2.zip` for example

then add the extension in your browsers extensions ponting to that file, and thats it

## Good Luck!

[ neowinx ](https://github.com/neowinx)
