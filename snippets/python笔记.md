- 强制转化为integer (无论float，string)

一般都是先转成float，再转成int

```
lst = ['1.0', 2.0, 3, '4']
[int(float(i)) if not pd.isna(i) and i != 'X' else i for i in lst]
```