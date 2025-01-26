# UI-X-TOOLS

```bash
npm install ui-x-tools
```

**NOTE:**
If you are using Tailwind version 3, add the following line to the main file:

```bash
import "ui-x-tools/dist/ui-x.css";
```

## Description

A modern and customizable UI component library for React, built with Tailwind CSS. Designed to help developers quickly create visually appealing and responsive user interfaces.

---

## Components

### 1. Accordion

```jsx static
import { Accordion } from "ui-x-tools";

function App() {
  return (
    <div>
      {/* Example 1 */}
      <Accordion title="Title 1" className="border rounded-md p-3 text-white mb-3">
        <div>Lorem ipsum dolor sit amet.</div>
      </Accordion>
      <Accordion title="Title 2" className="border rounded-md p-3 text-white mb-3">
        <div>Lorem ipsum dolor sit amet.</div>
      </Accordion>

      {/* Example 2 */}
      <Accordion title="Title 1" className="border-b-2 border-slate-500 pb-3 mb-3">
        <div>Lorem ipsum dolor sit amet.</div>
      </Accordion>
      <Accordion title="Title 2">
        <div>Lorem ipsum dolor sit amet.</div>
      </Accordion>
    </div>
  );
}

export default App;
```

### 2. Advanced Select

```jsx static
import { useState } from "react";
import { AdvancedSelect, Options } from "ui-x-tools";

function App() {
  const [optionSelect, setOptionSelect] = useState(null);

  const listSelect1 = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const listSelect2 = [
    { id: 1, value: "Option 1", src: "https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png" },
    { id: 2, value: "Option 2", src: "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png" },
    { id: 3, value: "Option 3", src: "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png" },
  ];

  return (
    <div>
      {/* Example 1 */}
      <AdvancedSelect placeholder="Select ...">
        {listSelect1.map((item, index) => (
          <Options key={`advanced-select-${index}`}>{item}</Options>
        ))}
      </AdvancedSelect>

      {/* Example 2 */}
      <AdvancedSelect
        placeholder="Select ..."
        value={
          optionSelect !== null ? (
            <div className="flex items-center gap-3">
              <img alt="" src={listSelect2[optionSelect]?.src} className="w-4 object-scale-down" />
              {listSelect2[optionSelect]?.value}
            </div>
          ) : null
        }
      >
        {listSelect2.map((item, index) => (
          <Options onClick={() => setOptionSelect(index)} key={`advanced-select-${index}-2`}>
            <div className="flex items-center gap-3">
              <img alt="" src={item.src} className="w-4 object-scale-down" />
              {item.value}
            </div>
          </Options>
        ))}
      </AdvancedSelect>
    </div>
  );
}

export default App;
```

### 3. Button

```jsx static
import { Button } from "ui-x-tools";

function App() {
  return (
    <div>
      {/* Example 1 */}
      <Button>Button 1</Button>

      {/* Example 2 */}
      <Button className="text-white border-blue-500 bg-blue-700 hover:bg-blue-800">Button 2</Button>

      {/* Example 3 */}
      <Button className="text-blue-400 border-blue-500 bg-transparent">Button 3</Button>

      {/* Example 4 */}
      <Button className="text-purple-400 border-purple-500 bg-transparent border-none">Button 4</Button>
    </div>
  );
}

export default App;
```

### 4. Checkbox

```jsx static
import { useState } from "react";
import { Checkbox } from "ui-x-tools";

function App() {
  const [checkboxValue, setCheckboxValue] = useState(true);

  return (
    <div>
      {/* Example 1 */}
      <Checkbox onChange={() => setCheckboxValue(!checkboxValue)} checked={checkboxValue} />

      {/* Example 2 */}
      <Checkbox onChange={() => setCheckboxValue(!checkboxValue)} checked={checkboxValue} className="bg-green-500" />

      {/* Example 2 */}
      <Checkbox onChange={() => setCheckboxValue(!checkboxValue)} checked={checkboxValue} className="bg-blue-500" />

      {/* Example 3 */}
      <Checkbox
        onChange={() => setCheckboxValue(!checkboxValue)}
        checked={checkboxValue}
        className="bg-blue-500 border-blue-800"
      />
    </div>
  );
}

export default App;
```

### 5. ColorPicker

```jsx static
import { useState } from "react";
import { ColorPicker } from "ui-x-tools";

function App() {
  const [color, setColor] = useState("#1d4ed8");

  return (
    <div>
      <ColorPicker value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}

export default App;
```

### 6. Container

```jsx static
import { Container } from "ui-x-tools";

function App() {
  return <Container></Container>;
}

export default App;
```

### 7. Datepicker

```jsx static
import { useState } from "react";
import { Datepicker } from "ui-x-tools";

function App() {
  const [date, setDate] = useState(new Date());

  const options1 = {
    minYear: 1950,
    maxYear: 2050,
    location: "es-MX",
    weekDays: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
  };
  const options2 = {
    minYear: 1950,
    maxYear: 2050,
    icon: false,
    hour: false,
  };

  return (
    <div>
      {/* Example 1 */}
      <Datepicker options={options1} date={date} setDate={setDate} />

      {/* Example 2 */}
      <Datepicker
        options={options2}
        date={date}
        setDate={setDate}
        className="bg-slate-600 ring-blue-500 text-white"
        cardClassName="bg-slate-200 text-sltate-700"
      />
    </div>
  );
}

export default App;
```

### 8. Drawer

```jsx static
import { useState } from "react";
import { Drawer } from "ui-x-tools";

function App() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div>
      {/* Example 1 */}
      <Drawer dir="right" open={open1} setOpen={() => setOpen1(false)}>
        <p>Lorem ipsum dolor sit amet.</p>
      </Drawer>

      {/* Example 2 */}
      <Drawer dir="left" open={open2} setOpen={() => setOpen2(false)}>
        <p>Lorem ipsum dolor sit amet.</p>
      </Drawer>

      {/* Example 3 */}
      <Drawer dir="top" open={open3} setOpen={() => setOpen3(false)} className="bg-green-500">
        <p>Lorem ipsum dolor sit amet.</p>
      </Drawer>

      {/* Example 4 */}
      <Drawer
        dir="bottom"
        open={open4}
        setOpen={() => setOpen4(false)}
        className="bg-slate-400 rounded-t-3xl text-white"
      >
        <p>Lorem ipsum dolor sit amet.</p>
      </Drawer>
    </div>
  );
}

export default App;
```

### 9. Input

```jsx static
import { useState } from "react";
import { Input } from "ui-x-tools";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      {/* Example 1 */}
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="user" className="w-96" />

      {/* Example 2 */}
      <Input placeholder="email" type="email" />

      {/* Example 3 */}
      <Input placeholder="password" type="password" />
    </div>
  );
}

export default App;
```

### 10. Modal

```jsx static
import { useState } from "react";
import { Modal, Button } from "ui-x-tools";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal open={open} setOpen={setOpen}>
        Lorem ipsum dolor sit amet.
      </Modal>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
    </div>
  );
}

export default App;
```

### 11. Radio

```jsx static
import { useState } from "react";
import { Radio } from "ui-x-tools";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {/* Example 1 */}
      <Radio onChange={() => setChecked(!checked)} checked={checked} />

      {/* Example 2 */}
      <Radio onChange={() => setChecked(!checked)} checked={checked} className="accent-red-700" />

      {/* Example 3 */}
      <Radio onChange={() => setChecked(!checked)} checked={checked} className="accent-green-700" />
    </div>
  );
}

export default App;
```

### 12. Select

```jsx static
import { useState } from "react";
import { Select } from "ui-x-tools";

function App() {
  const [optionsSelect, setOptionsSelect] = useState(0);

  return (
    <div>
      <Select value={optionsSelect} onChange={(e) => setOptionsSelect(e.target.value)}>
        <option value="" disabled>
          Select ...
        </option>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
      </Select>
    </div>
  );
}

export default App;
```

### 13. Spinner

```jsx static
import { Spinner } from "ui-x-tools";

function App() {
  return (
    <div>
      <Spinner />
      <Spinner className="text-green-500" />
      <Spinner className="text-yellow-500" />
      <Spinner className="text-red-500" />
      <Spinner className="size-7" />
      <Spinner className="size-10" />
      <Spinner className="size-16" />
      <Spinner className="size-20" />
    </div>
  );
}

export default App;
```

### 14. Switch

```jsx static
import { useState } from "react";
import { Switch } from "ui-x-tools";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {/* Example 1 */}
      <Switch onClick={() => setChecked(!checked)} checked={checked} />

      {/* Example 2 */}
      <Switch
        onClick={() => setChecked(!checked)}
        checked={checked}
        className="peer-focus:ring-green-200 peer-checked:bg-red-700"
      />

      {/* Example 3 */}
      <Switch
        onClick={() => setChecked(!checked)}
        checked={checked}
        className="peer-focus:ring-green-200 peer-checked:bg-green-700"
      />

      {/* Example 4 */}
      <Switch onClick={() => setChecked(!checked)} checked={checked} className="w-16 h-7 after:h-9 after:w-9" />

      {/* Example 5 */}
      <Switch
        onClick={() => setChecked(!checked)}
        checked={checked}
        className="w-16 h-7 after:h-9 after:w-9 peer-checked:bg-red-700"
      />

      {/* Example 6 */}
      <Switch
        onClick={() => setChecked(!checked)}
        checked={checked}
        className="w-16 h-7 after:h-9 after:w-9 peer-checked:bg-green-700"
      />

      {/* Example 7 */}
      <Switch
        onClick={() => setChecked(!checked)}
        checked={checked}
        className="w-12 h-6 after:top-1/2 after:-translate-y-1/2 after:start-[4px]"
      />

      {/* Example 8 */}
      <Switch
        onClick={() => setChecked(!checked)}
        checked={checked}
        className="w-20 h-10 after:h-9 after:w-9 after:start-[4px]"
      />
    </div>
  );
}

export default App;
```

### 15. Table

```jsx static
import { useState } from "react";
import { Table, Thead, Tr, Th, Tbody, Td } from "ui-x-tools";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {/* Example 1 */}
      <Table>
        <Thead>
          <Tr className="bg-transparent">
            <Th>Product name</Th>
            <Th>Color</Th>
            <Th>Category</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td className="font-medium whitespace-nowrap text-white">Apple MacBook Pro 17"</Td>
            <Td>Silver</Td>
            <Td>Laptop</Td>
            <Td>$2999</Td>
          </Tr>
          <Tr>
            <Td className="font-medium whitespace-nowrap text-white">Microsoft Surface Pro</Td>
            <Td>White</Td>
            <Td>Laptop PC</Td>
            <Td>$1999</Td>
          </Tr>
          <Tr>
            <Td className="font-medium whitespace-nowrap text-white">Magic Mouse 2</Td>
            <Td>Black</Td>
            <Td>Accessories</Td>
            <Td>$99</Td>
          </Tr>
        </Tbody>
      </Table>

      {/* Example 2 */}
      <Table className="divide-y divide-gray-200">
        <Thead className="bg-transparent">
          <Tr className="bg-transparent">
            <Th>Product name</Th>
            <Th>Color</Th>
            <Th>Category</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody className="divide-gray-200">
          <Tr className="bg-transparent">
            <Td>Apple MacBook Pro 17"</Td>
            <Td>Silver</Td>
            <Td>Laptop</Td>
            <Td>$2999</Td>
          </Tr>
          <Tr className="bg-transparent">
            <Td>Microsoft Surface Pro</Td>
            <Td>White</Td>
            <Td>Laptop PC</Td>
            <Td>$1999</Td>
          </Tr>
          <Tr className="bg-transparent">
            <Td>Magic Mouse 2</Td>
            <Td>Black</Td>
            <Td>Accessories</Td>
            <Td>$99</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}

export default App;
```

### 16. Tabs

```jsx static
import { useState } from "react";
import { Tabs } from "ui-x-tools";

function App() {
  const [option, setOption] = useState(0);

  const menuList = ["Tab 1", "Tab 2", "Tab 3", "Very long text", "a", "b", "c"];

  return (
    <div>
      {/* Example 1 */}
      <Tabs option={option} setOption={setOption} items={menuList} />

      {/* Example 2 */}
      <Tabs
        option={option}
        setOption={setOption}
        className="bg-hidden border-b-2 rounded-none p-0"
        styleBar="h-1 -bottom-[2px] bg-blue-700 rounded-none"
        items={menuList}
      />
    </div>
  );
}

export default App;
```

### 17. TextArea

```jsx static
import { TextArea } from "ui-x-tools";

function App() {
  return (
    <div>
      {/* Example 1 */}
      <TextArea rows={5} />
      {/* Example 2 */}
      <TextArea className="resize-none" />
      {/* Example 3 */}
      <TextArea className="resize-none" style={{ fieldSizing: "content" }} />
    </div>
  );
}

export default App;
```

### 18. Tooltip

```jsx static
import { Tooltip, Button } from "ui-x-tools";

function App() {
  return (
    <div className="flex items-center justify-center my-20 gap-5">
      <Tooltip content="Lorem ipsum dolor sit amtet" dir="left">
        <Button className="w-[140px]">Tooltip Left</Button>
      </Tooltip>
      <div className="flex flex-col gap-5">
        <Tooltip content="Lorem ipsum dolor sit amtet" dir="top">
          <Button className="w-[140px]">Tooltip Top</Button>
        </Tooltip>
        <Tooltip content="Lorem ipsum dolor sit amtet" dir="bottom">
          <Button className="w-[140px]">Tooltip Bottom</Button>
        </Tooltip>
      </div>
      <Tooltip content="Lorem ipsum dolor sit amtet" dir="right">
        <Button className="w-[140px]">Tooltip Right</Button>
      </Tooltip>
    </div>
  );
}

export default App;
```

## Customization

All components are fully customizable via props. For detailed information about each component's props, refer to the examples above or the official API documentation.

## License

This library is licensed under the MIT License. You are free to use and modify it in your projects.

## Contribution

Contributions are welcome! If you'd like to improve this library, please submit a pull request on the [GitHub repository](https://github.com/DaxStrife/ui-x.git).
