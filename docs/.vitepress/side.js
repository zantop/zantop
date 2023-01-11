const fs = require("fs"); // 文件模块
const path = require("path"); // 路径模块
const log = console.log;

function ReadFile(dir = docsRoot, filesList = [], fpath = "") {
    console.log('地址',dir)
  let files = fs.readdirSync(dir);
  files = files.filter((item) => !item.includes(".vitepress"));
  // 10 1排序错误
  if (Array.isArray(files)) {
    files.sort((item1, item2) => {
      let c1 = item1.split(".")[0];
      let c2 = item2.split(".")[0];
      return c1 - c2;
    });
  }
//   console.log("文件333", files);
  files.forEach((item, index) => {
    let filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    log("isDirectory-------------------", stat.isDirectory(), item);
    // isDirectory 返回是否文件夹, 4.file.md dir:/Users/xx/reg-rules-js-site/docs/regular
    const fileNameArr = path.basename(filePath).split(".");
    if (stat.isDirectory()) { 
      // 生成目录名
      let text = fileNameArr.length > 1 ? fileNameArr[1] : fileNameArr[0];
      if (!text) {
        log(
          `warning: 该文件夹 "${filePath}" 没有按照约定命名，将忽略生成相应数据。`
        );
        return;
      }
      filesList.push({
        text,
        collapsable: true,
        items: [],
      });
      log(
        "递归读取文件夹的文件",
        path.join(dir, item),
        filesList[index].items,
        item
      );
      // 递归读取文件夹的文件 /Users/another/Documents/self-study/reg-rules-js-site/docs/test/test2 [] test2
      ReadFile(path.join(dir, item), filesList[index].items, item);
    //   console.log('结论',ReadFile(path.join(dir, item), filesList[index].items, item))
    } else {
      // 生成文件名数组
      let name = null;
      text = null;
      typeFile = null;
      pathName = null;
      let cloneArr = [...fileNameArr];
      typeFile = cloneArr[cloneArr.length - 1];
      if (fileNameArr.length > 1) {
        cloneArr.pop();
        name = cloneArr.join(".");
        pathName = fpath ? `${fpath}/${name}` : name;
        text = cloneArr.length > 1 ? cloneArr[1] : cloneArr[0];
      } else {
        log(
          `warning: 该文件 "${filePath}" 没有按照约定命名，将忽略生成相应数据。`
        );
        return;
      }

      log("name", name, pathName, typeFile, text);
      // 过滤非md文件
      if (typeFile === "md") {
        if (name === "README") return filesList.unshift("");
        // filesList.push([pathName, text]);
        filesList.push(text);
      }
    }
  });
  return filesList;
}

export default ReadFile;
