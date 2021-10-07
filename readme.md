# gitmusic

Set your current spotify track as your commit message

## Installation

You can install with npm: `npm i -g gitmusic`
Or with yarn `yarn global add gitmusic`

Requires node >= 12, an internet connection, and active usage of [lanyard by @Phineas](https://github.com/phineas/lanyard)

## Setup

Firstly, you will have to run the setup command. That can be done as follows

```
gitmusic setup <discord id>
```

So, for me, I would run `gitmusic setup 268798547439255572`

## Usage

You can now commit just by running `gitmusic`. This will effectively run, under the hood, `git add . && git commit -m "song"`.

If you want to just get your listening song and not commit, you can append the argument `true` to specify a dry run. E.g. `gitmusic true`

### Features

- idk i made ethis at 6:52am and i am going to bed now
- have fun
- works
