// by 叶朴

// config maybe

// [{ label: '名称', dataIndex: 'name' }]
function json2markdownTable(json, config = []) {
  let res = config.reduce((p, v) => `${p}${v.label}|`, '|') + `\n${config.reduce((p, v) => `${p}:-:|`, '|')}\n`;
  // 过滤非法数据
  if (!(typeof json === 'string' || typeof json === 'object')) {
    return;
  }
  let data = json;
  if (typeof json === 'string') {
    try {
      data = JSON.parse(json);
    } catch (e) {
      console.error(e);
    }
  }
  const _res = generateMarkdownTable.call(config, data, res);
  console.log('res', _res);
  return _res;
}

function getPath(path = '') {
  return path.split('.').slice(1).join('.');
}

function generateMarkdownTable(data, res) {
  const path = getPath(data.path);
  data.path = path;
  const next = path ? this.reduce((p, v) => `${p}${data[v.dataIndex] || '-'}|`, '|') + '\n' : '';
  // const next = path ? `|${path}|${data.type}|${example}|${data.title}|\n` : '';
  if (!data.item && !data.properties) {
    return res + next;
  }
  if (data.properties) {
    return res + next + Object.keys(data.properties)
    .reduce((p, v) => `${p}${generateMarkdownTable.call(this, data.properties[v], '')}`, '');
  }
  if (data.items) {
    return res + next + generateMarkdownTable.call(this, data.items, res);
  }
  return res;
};

export default json2markdownTable;
