import time
from selenium.webdriver.common.by import By

URL_LOGIN = "https://www.kabum.com.br/login"

def realizar_login(driver, email, senha):
    driver.get(URL_LOGIN)
    time.sleep(2)

    campo_email = driver.find_element(By.ID, "email")
    campo_senha = driver.find_element(By.ID, "password")

    campo_email.clear()
    campo_senha.clear()
    campo_email.send_keys(email)
    campo_senha.send_keys(senha)

    botao_entrar = driver.find_element(By.XPATH, "//button[contains(text(), 'Entrar')]")
    botao_entrar.click()
    time.sleep(3)

# Cenário 1: Login com credenciais válidas
def test_login_valido(driver):
    realizar_login(driver, "email@valido.com", "senhaCorreta123")
    assert "Minha Conta" in driver.page_source or "Sair" in driver.page_source

# Cenário 2: Login com e-mail inválido
def test_login_email_invalido(driver):
    realizar_login(driver, "email_invalido", "senhaCorreta123")
    erro = driver.find_element(By.CLASS_NAME, "sc-hlFled").text
    assert "E-mail inválido" in erro or "verifique os dados" in erro.lower()

# Cenário 3: Login com senha incorreta
def test_login_senha_incorreta(driver):
    realizar_login(driver, "email@valido.com", "senhaErrada")
    erro = driver.find_element(By.CLASS_NAME, "sc-hlFled").text
    assert "senha incorreta" in erro.lower() or "verifique os dados" in erro.lower()
