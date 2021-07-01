# color-converters

> A utility that provides simple color conversions from RGB to Hex and vice-versa. Can be used to quickly convert one to the other on the command line.

## Install

```
npm install -g color-converters OR yarn global add color-converters
OR
npx color-converters
```

## Usage
The `color-converters` package will give you access to two binaries: `rgb-to-hex` and `hex-to-rgb`. The names are pretty self-explanatory. The package is meant chiefly as a global module, used as follows:

```shell
rgb-to-hex <command> [option]
```

```shell
hex-to-rgb <command> [option]
```

For simple conversions, you might do something like this:

```shell
rgb-to-hex -r <red value> -g <green value> -b <blue value>

rgb-to-hex -r 255 -g 0 -b 0
# outputs "Success!  Your hex value is #ff0000"
```

```shell
hex-to-rgb -h <hex value>
hex-to-rgb -h "#fff"
hex-to-rgb -h "#ffffff"
# both output "Success!  Your RGB value is 255 255 255"
```

### In a Node project
You can also require these two scripts in a JS file.

```js
import color-converters from 'color-converters';
// more js code to explain how to use the package.
```

#### BASIC USAGE

```sh
color-converters <command> [option]
```

#### COMMANDS

```sh
help  Print help info
# other commands as needed. You may want to run `yarn start help` or `npm start help` and copy and paste the output.
```

#### OPTIONS

```sh
-d, --debug    Print debug info Default: false
-v, --version  Print CLI version Default: false
# other flags as needed. You may want to run `yarn start help` or `npm start help` and copy and paste the output.
```

## Changelog

[❯ Read the changelog here →](changelog.md)
