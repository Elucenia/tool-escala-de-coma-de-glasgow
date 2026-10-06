<!-- ELUCENIA technical documentation · escala-de-coma-de-glasgow · zh · no clinical/professional/rights approval -->

# 格拉斯哥昏迷评分（含 GCS-P）

[条件、来源与许可](https://elucenia.org/zh/tools/escala-de-coma-de-glasgow)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 睁眼反应（E）

`o`

- `1` — 1 · 无
- `2` — 2 · 对压力刺激
- `3` — 3 · 对声音刺激
- `4` — 4 · 自发
- `nt` — NT · 无法测试

### 言语反应（V）

`v`

- `1` — 1 · 无
- `2` — 2 · 发声
- `3` — 3 · 单词
- `4` — 4 · 混乱
- `5` — 5 · 定向正常
- `nt` — NT · 无法测试（如已插管）

### 最佳运动反应（M）

`m`

- `1` — 1 · 无
- `2` — 2 · 伸展
- `3` — 3 · 异常屈曲
- `4` — 4 · 正常屈曲
- `5` — 5 · 定位刺激
- `6` — 6 · 遵嘱动作
- `nt` — NT · 无法测试

### 瞳孔对光反应

`p`

- `0` — 双侧均有反应
- `1` — 一侧无反应
- `2` — 双侧均无反应
- `nt` — 无法评估

## 方法版本

GCS 3–15/Teasdale 1974；2014流程；GCS-P/Brennan 2018：减去瞳孔评分0–2

## 已记录的公式

格拉斯哥 = 睁眼（1至4）+ 语言反应（1至5）+ 运动反应（1至6），范围3至15。

GCS-P = 格拉斯哥 − 瞳孔评分（0 = 双侧反应；1 = 单侧无反应；2 = 双侧无反应），范围1至15。

标准压力刺激（2014）：甲床、斜方肌或眶上切迹加压。

## 限制与适用人群

除总分外，还应描述睁眼、语言和运动反应。GCS-P是2018年的扩展版本，通过减去瞳孔反应性评分计算，并在颅脑创伤队列中研究。单独的评分不包含所有预后因素；评估无法进行或受到干扰时，应核对该版本的说明。

## 参考文献

- [Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet, 1974.](https://doi.org/10.1016/S0140-6736(74)91639-0)

- [Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score: an extended index of clinical severity. J Neurosurg, 2018.](https://doi.org/10.3171/2017.12.JNS172780)

- [Teasdale G et al. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol, 2014.](https://doi.org/10.1016/S1474-4422(14)70120-6)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

轻度严重程度（13 至 15）

| 结果详情 | |
| --- | --- |
| 组成部分 | E4 V5 M6 |
| GCS-P（格拉斯哥 − 瞳孔反应性） | 15（1 到 15） |


### 2

中度严重（9 到 12）

| 结果详情 | |
| --- | --- |
| 组成部分 | E3 V4 M5 |
| GCS-P（格拉斯哥 − 瞳孔反应性） | 12（1 到 15） |


### 3

重度严重（3 到 8）

| 结果详情 | |
| --- | --- |
| 组成部分 | E2 V2 M4 |
| GCS-P（格拉斯哥 − 瞳孔反应性） | 7（1 到 15） |

格拉斯哥 ≤ 8：评估是否需要建立确定性气道。


### 4

重度严重（3 到 8）

| 结果详情 | |
| --- | --- |
| 组成部分 | E1 V1 M1 |
| GCS-P（格拉斯哥 − 瞳孔反应性） | 1（1 到 15） |

格拉斯哥 ≤ 8：评估是否需要建立确定性气道。


### 5

总分无法计算：记录并报告各组成部分

若有一个不可测试的组成部分（例如，眼睑水肿、气管插管），总分会低估严重程度。请分别描述每个组成部分。

