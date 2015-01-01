Olark plugin for GitBook
==============

You can use install it via **NPM**:

```
$ npm install gitbook-plugin-olark
```

And use it for your book in the book.json:

```
{
    "plugins": ["olark"]
}
```

You can set the Olark Site ID ID using the plugins configuration in the book.json:

```
{
    "plugins": ["olark"],
    "pluginsConfig": {
        "olark": {
            "site_id": "XYXYXY"
        }
    }
}
```


