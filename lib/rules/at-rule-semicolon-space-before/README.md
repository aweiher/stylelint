# at-rule-semicolon-space-before

Require a single space or disallow whitespace before the semicolons at-rules.

```css
@import "components/buttons";
/**                         ↑
 * The space before this semicolon */
```

## Options

`string`: `"always"|"never"`

### `"always"`

There *must always* be a single space before the semicolons.

The following patterns is considered a warning:

```css
@import "components/buttons";
```

The following pattern is *not* considered a warning:

```css
@import "components/buttons" ;
```

### `"never"`

There *must never* be a single space before the semicolons.

The following patterns is considered a warning:

```css
@import "components/buttons" ;
```

The following pattern is *not* considered a warning:

```css
@import "components/buttons";
```
