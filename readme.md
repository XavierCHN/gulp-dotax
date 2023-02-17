<!-- GETTING STARTED -->

# Gulp-dotax

这是一个目前依然处于测试阶段的，用来帮助开发者进行 dota2 自定义游戏开发的 gulp 插件，具体使用请参考 [X-Template](https://github.com/XavierCHN/x-template)。

This is a currently in testing phase, to help developers to develop dota2 custom game development with gulp, please refer to [X-Template](https://github.com/XavierCHN/x-template).

再说一次，具体的使用方法，还是建议参考 [X-Template](https://github.com/XavierCHN/x-template)。

如果有深入使用的自定义需求，再查阅下方的使用方法

如果有更多需求，issues are welcome

## 使用方法 Usage

### EXCEL文件编译成KV文件

#### Excel文件格式约定

1. 第一行为注释行，不写内容

2. 第二行为key行，写kv的key，其中第一列的key会被忽略，作为kv的`二级主键`（输出的一级主键统一为`XLSXContent`，dota2引擎会忽略这一key）

3. 如果有多级kv，本插件提供以下两种处理方式：1)在key后加`[{]`，以将后面直到匹配的下一个`[}]`之间的内容作为该key的value，2）在单元格中直接写完整的kv，如

```
{
    "some_key" "some_value
}
```

含有`{`的单元格内容会被直接作为`plain kv content`输出，因此在kv内容设计时，请勿写入包含`{`的内容，但是`本地化文本`不受此内容的影响；

4. 在kv文件中直接写本地化文本，只需将第二行的key修改为`#Loc{}_Description`，其中，`#Loc`会被替换为空白字符，`{}`会被替换为第一列的主键，本地化文本的内容将会被输出到参数中定义的`addon.csv`文件中

5. 对于技能的本地化，有一个特殊的东西是 `AbilityValues` 的本地化，如果要使用此功能，请在 `AbilityValues[{]` 后，在每个要使用的数值前插入一行，将他的key修改为 `#ValuesLoc`，并在下方的单元格中填入本地化文本内容，具体请查看本项目中的 `test.xlsx` 的写法

#### 使用示例

```Typescript
const sheet_2_kv =
    (watch: boolean = false) =>
    () => {
        const excelFiles = `${paths.excels}/**/*.{xlsx,xls}`;
        const transpileSheets = () => {
            return gulp
                .src(excelFiles)
                .pipe(
                    dotax.sheetToKV({
                        sheetsIgnore: '^__', // 忽略以两个下划线开头的sheet
                        indent: `	`, // 自定义缩进
                        addonCSVPath: `${paths.game_resource}/addon.csv`, // 本地化文件路径
                    })
                )
                .pipe(gulp.dest(paths.kv));
        };

        if (watch) {
            return gulp.watch(excelFiles, transpileSheets);
        } else {
            return transpileSheets();
        }
    };
```

#### 参数说明

```TypeScript
export interface SheetToKVOptions {
    /** 需要略过的表格的正则表达式 */
    sheetsIgnore?: string;
    /** 是否启用啰嗦模式 */
    verbose?: boolean;
    /** 是否将汉语转换为拼音 */
    chineseToPinyin?: boolean;
    /** 自定义的拼音 */
    customPinyins?: Record<string, string>;
    /** KV的缩进方式，默认为四个空格 */
    indent?: string;
    /** 是否将只有两列的表输出为简单键值对 */
    autoSimpleKV?: boolean;
    /** KV文件的扩展名，默认为 .txt */
    kvFileExt?: string;
    /** 强制输出空格的单元格内容（如果单元格内容为此字符串，输出为 "key" "" */
    forceEmptyToken?: string;
    /** 中文转换为英文的映射列表，这些中文将会被转换为对应的英文而非拼音 */
    aliasList?: Record<string, string>;
    /**
     * 输出本地化文本到 addon.csv 文件，如果要启动，需要配置 addon.csv所在路径
     * 使用方法：
     *   将 sheet 的第二行写特定的key，例如 `#Loc{}_Lore`，{} 的内容将会被替换为第一列的主键
     **/
    addonCSVPath?: string;
    /** addon.csv输出的默认语言，默认为SChinese */
    addonCSVDefaultLang?: string;
}
```

### kv同步到json

#### 使用方法

```Typescript
const kv_2_js =
    (watch: boolean = false) =>
    () => {
        const kvFiles = `${paths.kv}/**/*.{kv,txt}`;
        const transpileKVToJS = () => {
            return gulp
                .src(kvFiles)
                .pipe(dotax.kvToJS())
                .pipe(gulp.dest(paths.panorama_json))
                .pipe(gulp.dest(paths.src_json));
        };

        if (watch) {
            return gulp.watch(kvFiles, transpileKVToJS);
        } else {
            return transpileKVToJS();
        }
    };
```

#### 参数说明

```Typescript
export interface KVToJSOptions {
    // 是否将含有 ArraySeperator 的字符串转换为 array
    AutoConvertToArray?: boolean;
    /** 数组的分隔符 目前是 竖杠 | 和 # 号 */
    ArraySeperator?: string;
    /** 是否自动合并#base */
    AutoMergeBases?: boolean;
}
```

要特别注意：

为了方便json处理kv数据，这个插件提供了一个将 | 或者 # 分割的数据替换成数组的功能

### 本地化文本生成

为了方便本地化文本的管理和多国语言翻译合作，使用csv文件来管理所有的本地化文本，用以在各类翻译协作软件上传下载。

#### 从kv文件生成本地化字段

支持从kv文件生成本地化字段

可以根据不同的kv决定要生成哪些字段

例如：对于技能kv
```
"my_ability"
{
    "BaseClass" "ability_datadriven"
}
```
使用如下配置
```Typescript
const kv_to_local = () => () => {
    return gulp.src(`${paths.kv}/**/*.{kv,txt}`).pipe(
        dotax.kvToLocalsCSV(`${paths.game_resource}/addon.csv`, {
        })
    );
};
```
即可生成 dota_tooltip_ability_my_ability 和 dota_tooltip_ability_my_ability_description 两个 token 到 addon.csv

如果要自定义其他token，可以使用 `customPrefix` `customSuffix` 和 `customToken`，他们提供三个参数

```
key kv的键，上面的例子中为 my_ability
```
```
data 整个kv的数据，上面的例子中，data.some_key = "some_value"
```
```
filePath kv文件所在的路径，你可以使用这个参数给某些文件中的 kv 固定的 token 生成规则
```

如果要生成自定义的技能 token，一般来说，将 `exportKVModifiers` 和 `exportAbilityValues` 设置为true即可。


#### 参数说明

``` Typescript
export interface KVToLocalizationOptions {
    /**
     * 自定义的前缀
     * @type {Record<string, string>}
     * @memberof KVToLocalizationOptions
     */
    customPrefix?: (key: string, data: any, filePath: string) => string;
    /**
     * 需要输出的自定义后缀
     * @type {Record<string, string[]>}
     * @memberof KVToLocalizationOptions
     */
    customSuffix?: (key: string, data: any, filePath: string) => string[];
    /**
     * 如果有其他需要的自定义的token，在这个方法里面提供
     *
     * @memberof KVToLocalizationOptions
     */
    customToken?: (key: string, data: any, filePath: string) => string[];
    /**
     * 获取了这个kv项的所有token之后，可以使用这个方法来过滤掉不需要的token
     * @memberof KVToLocalizationOptions
     */
    transformTokenName?: (tokens: string[], key: string, data: any, filePath: string) => string[];
    /**
     * 自定义的忽略规则，因为不是所有的kv都需要本地化，比如某些kv是用来记录一些数据的，不需要本地化
     * 这里提供的默认规则是只有有BaseClass的才会被本地化
     * @memberof KVToLocalizationOptions
     */
    customIgnoreRule?: (fileName: string, key: string, data: any, filePath: string) => boolean;
    /**
     * 是否导出技能kv中的modifier
     *
     * @type {boolean}
     * @memberof KVToLocalizationOptions
     */
    exportKVModifiers?: boolean;
    /**
     * 是否导出技能kv中的AbilityValues
     * @type {boolean}
     * @memberof KVToLocalizationOptions
     */
    exportAbilityValues?: boolean;
}
```

#### 本地化文本输出

此功能仅仅是为了将 `addon.csv` 中的内容输出到 `addon_*.txt`

```Typescipt
const csv_to_localization =
    (watch: boolean = false) =>
    () => {
        const addonCsv = `${paths.game_resource}/addon.csv`;
        const transpileAddonCSVToLocalization = () => {
            return gulp.src(addonCsv).pipe(dotax.csvToLocals(paths.game_resource));
        };
        if (watch) {
            return gulp.watch(addonCsv, transpileAddonCSVToLocalization);
        } else {
            return transpileAddonCSVToLocalization();
        }
    };
```

### 生成imagePrecache

直接食用即可

```Typescript
const create_image_precache =
    (watch: boolean = false) =>
    () => {
        const imageFiles = `${paths.panorama}/images/**/*.{jpg,png,psd}`;
        const createImagePrecache = () => {
            return gulp
                .src(imageFiles)
                .pipe(dotax.imagePrecacche(`content/panorama/images/`))
                .pipe(gulp.dest(paths.panorama));
        };
        if (watch) {
            return gulp.watch(imageFiles, createImagePrecache);
        } else {
            return createImagePrecache();
        }
    };

```

要注意的是，生成的css文件还需要手动引用到你的项目中，他们才会被编译

而且，为了避免载入卡死，css文件会以500个一拆分的形式输出，所以如果有新增的 image_pcache*.css，也需要添加引用