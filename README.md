<br>

![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Roboto&pause=1000&width=435&lines=%22+Welcome+to+my+Package++%F0%9F%91%8B%22;%22+DeadJson+is+too+easy+for+control+json+files+%22;%22+this+is+documentation+for+DeadJson+%22)

---

# **DeadJson**

### setup:-

```js
const DeadJson = require("deadjson").default;
const file = require("your path of file here");
const data = new DeadJson("your path of file here", file);
```

`add()`:-

```js
data.add("key here", { data: any });
```

- example
  ```js
  data.add("deadjson", ["hello!", 4, { hi: "hi" }]);
  ```

---

<br>

`delete()`:-

```js
data.delete("key");
```

- example
  ```js
  // json file
  /*
    {
      "json": "json"
    }
  */
  data.delete("json");
  ```

---

<br>

`get()`:-

```js
data.get()["your keys of json here"];
```

- example
  ```js
  // json file
  /*
    {
      "json": "json"
    }
  */
  data.get().json; // json
  ```

---

<br>

`save()`:-

```js
data.save({ spaces: [number] });
```

- example
  ```js
  // to edit text
  data.add("json", "json").save({ spaces: 2 });
  // to add into object
  data.add("json", { ...data.get().json, value }).save({ spaces: 2 });
  // to add into array
  data.add("json", [...data.get().json, value]).save({ spaces: 2 });
  ```

<br>
<br>

---

| Function | Description                    |
| -------- | ------------------------------ |
| add      | to add data to your json file  |
| delete   | to get element and delete it   |
| get      | to get element and his value   |
| save     | save your data in to your file |

---

![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Roboto&pause=1000&width=435&lines=%22+Thanks+For+Useing+My+package+%E2%9D%A4+%22)
# DeadJson
# DeadJson
# DeadJson
