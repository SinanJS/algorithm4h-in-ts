# algorithm4h-in-ts

```js
class XXX{
	// 关联关系列表
	relationList () {
	      if (!Array.isArray(this.userDataList)) {
	        return []
	      }
	      if (this.isProductLine) {
	        try {
	          let filterList = this.userDataList.filter(item => Array.isArray(item.members))
	          filterList.length && filterList.map((data) => {
	            data && data.members.sort((a, b) => {
	              return a.seq_id - b.seq_id
	            })
	            return data
	          })
	          return filterList
	        } catch (e) {
	          return this.userDataList.filter(item => Array.isArray(item.members))
	        }
	      }
	      return this.userDataList.filter(item => Array.isArray(item.members))
	}
}
```
