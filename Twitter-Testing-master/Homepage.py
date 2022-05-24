import constants as const
from selenium.webdriver.common.keys import Keys as k
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome(const.chrome_driver_path)
driver.implicitly_wait(2000)

def login_pass(driver):
    check = driver.find_element_by_css_selector('input[data-testid="ocfEnterTextTextInput"]')
    check.send_keys("kslaks13")
    bot = driver.find_element_by_css_selector('div[data-testid="ocfEnterTextNextButton"]')
    bot.click()

def twitter_login(email,password,driver):
    driver.get("https://twitter.com")

    signin = driver.find_element_by_link_text("Sign in")
    signin.click()

    email_field = driver.find_element_by_css_selector('input[autocomplete="username"]')
    email_field.send_keys(email)

    next = driver.find_elements_by_css_selector('div[role="button"]')
    next[3].click()

    login_pass(driver)

    pass_field = driver.find_element_by_css_selector('input[autocomplete="current-password"]')
    pass_field.send_keys(password)

    login = driver.find_element_by_css_selector('div[data-testid="LoginForm_Login_Button"]')
    login.click()

def test_tweeting(message,driver:webdriver):
    tweet_box = driver.find_element_by_css_selector('div[aria-label="Tweet text"]')
    tweet_box.send_keys(message)
    tweet_Button = driver.find_element_by_css_selector('div[data-testid="tweetButtonInline"]')
    tweet_Button.click()

def test_Search(message,driver):
    search_box = driver.find_element_by_css_selector('input[aria-label="Search query"]')
    search_box.send_keys(message)
    search_box.send_keys(k.RETURN)
    time.sleep(6)  # waiting for search results to open
    driver.back()  # returning to homwpage

def Test_tweet_thread(message,driver):
    driver.find_element_by_xpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div/div/div[4]/div/section/div/div/div[1]/div/div/article/div/div/div/div[2]/div[2]/div[2]/div[1]/div/div").click()  #path of first tweet
    
    reply_test(message,driver)

    Retweet_test(driver)

    like_test(driver)

    back_to_home = driver.find_element_by_css_selector('div[data-testid="app-bar-back"]')
    time.sleep(2)
    back_to_home.click()

def reply_test(message,driver):
    reply_button = driver.find_element_by_css_selector('div[data-testid="reply"]')   # reply button test
    reply_button.click()
    tweet_box = driver.find_element_by_css_selector('div[aria-label="Tweet text"]')
    tweet_box.send_keys(message)
    tweet_bot = driver.find_element_by_css_selector('div[data-testid="tweetButton"]')
    tweet_bot.click()
    time.sleep(2)
    reply_button.click()
    close_button = driver.find_element_by_css_selector('div[data-testid="app-bar-close"]')
    time.sleep(2)
    close_button.click()

def Retweet_test(driver):
    time.sleep(2)
    retweet_button = driver.find_element_by_css_selector('div[data-testid="retweet"]') # 2 retweet
    retweet_button.click()
    retweet = driver.find_element_by_css_selector('div[data-testid="retweetConfirm"]')
    retweet.click()
    time.sleep(2)
    retweet_button.click()
    retweet_unconfirm = driver.find_element_by_css_selector('div[data-testid="unretweetConfirm"]')
    retweet_unconfirm.click()
    time.sleep(2)

def like_test(driver):
    like_button = driver.find_element_by_css_selector('div[data-testid="like"]')
    like_button.click()
    time.sleep(2)
    like_button.click()
    time.sleep(2)

def scrolldown(driver,counter):
    counter += 1
    SCROLL_PAUSE_TIME = 1

    # Get scroll height
    last_height = driver.execute_script("return document.body.scrollHeight")

    while True:
    # Scroll down to bottom
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Wait to load page
        time.sleep(SCROLL_PAUSE_TIME)

    # Calculate new scroll height and compare with last scroll height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if ((new_height == last_height) or (counter == 2)):
            break
        last_height = new_height

twitter_login("twitter.sel.iouhj@gmail.com","hgdt675@aWER",driver)
time.sleep(3)

test_tweeting("testing from selenium 5.0",driver)
time.sleep(3)

test_Search("barca",driver)
time.sleep(3)

Test_tweet_thread("Testing reply 2.0",driver)
time.sleep(3)

counter =0
scrolldown(driver,counter)
time.sleep(5)

driver.quit()











#twitter.sel.iouhj@gmail.com
#hgdt675@aWER
#kslaks13




