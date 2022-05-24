import constants as const
from selenium import webdriver

driver = webdriver.Chrome(const.chrome_driver_path)

def twitter_login(email,password,driver):
    driver.get("https://twitter.com")

    driver.implicitly_wait(10)

    signin = driver.find_element_by_link_text("Sign in")
    signin.click()

    email_field = driver.find_element_by_css_selector('input[autocomplete="username"]')
    email_field.send_keys(email)

    next = driver.find_elements_by_css_selector('div[role="button"]')
    next[3].click()

    pass_field = driver.find_element_by_css_selector('input[autocomplete="current-password"]')
    pass_field.send_keys(password)

    login = driver.find_element_by_css_selector('div[data-testid="LoginForm_Login_Button"]')
    login.click()
