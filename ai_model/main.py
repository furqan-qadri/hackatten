from file_reader import read_file
from report_generator import generate_esg_report

env_content = read_file('environmental_report.txt')
soc_content = read_file('social_report.txt')
gov_content = read_file('governance_report.txt')


openai_api_key = '' #i removed my api key for submission-furqan

esg_report = generate_esg_report(env_content, soc_content, gov_content, openai_api_key)

with open('esg_compliance_report.txt', 'w', encoding='utf-8') as report_file:
    report_file.write(esg_report)
