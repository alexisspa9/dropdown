# Dropdown

simply install the package and maintain a structure in your html files like so:

```
npm install @alexisspa9/dropdown

```

then use in your javascript

```
const dropdownFunc = require('@alexisspa9/dropdown');

```
then in your html

```
<li class="hasDropdown">
	<a href="#">Parent Element</a>
	<ul class="dropdown">
		<li><a href="#">item 1</a></li>
		<li><a href="#">item 1</a></li>
		<li><a href="#">item 1</a></li>
		<li><a href="#">item 1</a></li>
		<li><a href="#">item 1</a></li>
		<li><a href="#">item 1</a></li>
	</ul>
</li>
```
dropdown element should always be a child of the toggle element.
Parent element should have the class "hasDropdown" and child element should. have the class "dropdown"