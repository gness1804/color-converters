# @gness1804/color-converters

> A utility that provides simple color conversions from RGB to Hex and vice-versa. Can be used to quickly convert one to the other on the command line.

<br />

## Install

```
npm install -g @gness1804/color-converters OR yarn global add @gness1804/color-converters
OR
npx @gness1804/color-converters
```

<br />

## Usage
The `color-converters` package will give you access to two binaries: `rgb-to-hex` and `hex-to-rgb`. The names are pretty self-explanatory. The package is meant as a global module, used as follows:

```shell
rgb-to-hex <command> [option]
```

```shell
hex-to-rgb <command> [option]
```

<br />

For conversions, you might do something like this:

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

<br />

## All Commands and Options

### For `rgb-to-hex`:

#### COMMANDS

```sh
  help  Print out help info.
```

#### OPTIONS
```sh
-d, --debug    Print debug info. Default: false
-v, --version  Print CLI version. Default: false
-r, --red      The value for red. 0 to 255. Default: false
-g, --green    The value for green. 0 to 255. Default: false
-b, --blue     The value for blue. 0 to 255. Default: false
```

### For `hex-to-rgb`:

#### COMMANDS

```sh
  help  Print out help info.
```

#### OPTIONS
```sh
 d, --debug    Print debug info. Default: false
-v, --version  Print CLI version. Default: false
-h, --hex      The hex value (3 or 6 characters) Default: false
```

<br />

## Changelog

[❯ Read the changelog here →](CHANGELOG.md)
