import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

@pytest.fixture
def driver():
    options = Options()
    options.add_argument("--start-maximized")
    service = Service('caminho/para/seu/chromedriver')  # Atualize com seu caminho
    driver = webdriver.Chrome(service=service, options=options)
    yield driver
    driver.quit()
