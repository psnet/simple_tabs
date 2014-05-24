Simple Tabs jQuery plugin
===========

jQuery плагин для быстрого и простого создания вкладок. Не нуждается в инициализации, работает сразу после готовности DOM, использует *on* (live) события, поэтому будет работать на динамично формируемых страницах.

Для вкладок задается группа и id (для возможности размещать на странице несколько разных групп вкладок даже если у них пересекаются id).


Демо
---

http://psnet.lookformp3.net/_demo/simple_tabs/example.htm


Код из демо:
```html
<div class="tabs">
	<a href="#" class="js-simple-tab active" data-tab-group="example" data-tab-id="1">Tab 1</a>
	<a href="#" class="js-simple-tab" data-tab-group="example" data-tab-id="2">Tab 2</a>
	<a href="#" class="js-simple-tab" data-tab-group="example" data-tab-id="3">Tab 3</a>
</div>

<div class="content">
	<div class="js-simple-tab-content" data-tab-group="example" data-tab-id="1">
		Tab 1 content goes here
	</div>
	<div class="js-simple-tab-content d-n" data-tab-group="example" data-tab-id="2">
		Tab 2 content goes here
	</div>
	<div class="js-simple-tab-content d-n" data-tab-group="example" data-tab-id="3">
		Tab 3 content goes here
	</div>
</div>
```


Подключение
---

- Подключить jQuery
- Подключить плагин
- Создать html код по инструкции ниже или использовать пример кода из демо


Инструкция по использованию
---

- Вкладка должна содержать класс "**js-simple-tab**" и атрибуты "**data-tab-group**" и "**data-tab-id**":
```html
<a href="#" class="js-simple-tab" data-tab-group="example" data-tab-id="1">Вкладка 1</a>
```

- Контейнер, связанный с вкладкой, должен иметь класс "**js-simple-tab-content**" и также содержать атрибуты "**data-tab-group**" и "**data-tab-id**" с теми же значениями что и его вкладка:
```html
<div class="js-simple-tab-content" data-tab-group="example" data-tab-id="1">
	Здесь контент для вкладки 1
</div>
```
- Открытая вкладка по-умолчанию должна содержать класс "**active**", контент этой вкладки должен быть видимым. Остальной контент других вкладок должен быть скрыт средствами CSS (display: none;).


Лицензия
---

Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
