# Valeriya Vorobyeva

![Photo][photo]

## Contacts

![E-Mail:][mail] riria.river@gmail.com \
![Phone:][phone] +7 (978) 847-21-85 \
![Discord:][discord] [riariver](https://discordapp.com/users/675686758448627713) \
![Telegram:][telegram] [@RiaRiver](https://t.me/RiaRiver) \
![Github:][github] [RiaRiver](https://github.com/RiaRiver/)

---

## About me

I am 36 years old. I have been studying frontend technologies since 2020. Unfortunately, there was a long break in studies due to family circumstances. I like learning programming and solving problems. My goal now is to get a strong knowledge of the frontend and learn React and Agular.

I have some experience as an HTML/CSS/JS mentor on the GLO Academy's "WebStart" course. I like to help others with their studies and judging by the feedback from my students, I do it well.

---

## Skills

- HTML
- СSS, Sass
- JS
- jQuery
- Bootstrap
- React
- MUI
- Gulp
- Webpack
- Git, GitHub
- VSCode, WebStorm/PhpStorm

---

## Code Example

### Task areBracketsBalanced.js

Implement and export a default function that accepts a string consisting only of opening and closing parentheses as input and checks whether this string is correct. An empty string (absence of parentheses) is considered correct.

A string is considered correct (balanced) if the bracket structure contained in it meets the requirements:

- Brackets are paired structures. Each opening bracket must have a corresponding closing bracket.
- The closing bracket should not go ahead of the opening one.

```javascript
import areBracketsBalanced from 'roundBracketsValidator';

areBracketsBalanced('(())'); // true
areBracketsBalanced('((())'); // false
```

### Solution

```JavaScript
const areBracketsBalanced = (str) => {
  if (str.length % 2 !== 0) {
    return false;
  }

  let balance = 0;

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    balance += char === '(' ? 1 : -1;

    if (balance < 0) return false;
  }

  return balance === 0;
};

export default areBracketsBalanced;
```

[photo]: /img/photo.jpg
[mail]: /img/mail.png
[phone]: /img/phone.png
[discord]: /img/discord.png
[telegram]: /img/telegram.png
[github]: /img/github.png
