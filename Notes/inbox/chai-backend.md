---
publish: true
---
1. Mongoose saves in bson
2. #doubt each video gets an owner then is it not necessary to keep videoCreated in the user schema or we can link this thing from the previous one each video having its own owner
3. index: true (if you require searching in mongodb) to enable searching in any field this makes it more optimize
4. mongoose aggregation
5. 3 parts in jwt -> headers, payload(data in encrypted format), verification signature(constains secret)
