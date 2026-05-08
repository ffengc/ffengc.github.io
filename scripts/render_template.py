import yaml
from jinja2 import Template


def render(template_path, data_path):
    with open(data_path, 'r') as file:
        publications = yaml.load(file, Loader=yaml.FullLoader)  # 读取YAML文件中的数据

    print(f'Total publications: {len(publications)}')
    template = Template(open(template_path).read())

    return template.render(publications=publications)


if __name__ == '__main__':
    html = render('publications_template.html', './publications.yaml')
    with open('publications.html', 'w') as file:
        file.write(html)