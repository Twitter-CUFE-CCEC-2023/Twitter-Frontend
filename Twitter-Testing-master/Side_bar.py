import email
from faulthandler import is_enabled
from lib2to3.pgen2 import driver
import unittest
from xml.sax.xmlreader import Locator
from selenium import webdriver
import time
from locator import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

PATH = "/usr/bin/chromedriver"
f = open("Side_Bar_log.txt", "a")

def scrolldown(driver,counter):
    counter += 1
    SCROLL_PAUSE_TIME = 5

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

class PythonOrgSearch(unittest.TestCase):
    
    
    def setUp(self):
        chromeOptions = webdriver.ChromeOptions() 

        chromeOptions.add_argument("--no-sandbox") 
        chromeOptions.add_argument("--disable-setuid-sandbox") 

        chromeOptions.add_argument("--headless");
        chromeOptions.add_argument("--remote-debugging-port=9222")  # this

        chromeOptions.add_argument("--disable-dev-shm-using") 
        chromeOptions.add_argument("--disable-extensions") 
        chromeOptions.add_argument("--disable-gpu") 
        chromeOptions.add_argument("start-maximized") 
        chromeOptions.add_argument("disable-infobars")
        chromeOptions.add_argument(r"user-data-dir=.\cookies\\test") 



        self.driver =  webdriver.Chrome(PATH,chrome_options=chromeOptions)
    
        self.driver.get(STARTUP_PAGE)
        self.driver.get("http://www.twittercloneteamone.tk/home")
        self.driver.implicitly_wait(10)
        self.total_tests = 0
        self.pass_tests = 0
        self.failed_tests = 0

        el = self.driver.find_element_by_xpath(sign_in)
        action = webdriver.common.action_chains.ActionChains(self.driver)
        action.move_to_element_with_offset(el, 5, 5)
        action.click()
        action.perform()

        time.sleep(1)

        self.driver.find_element_by_xpath(email_field).clear()
        self.driver.find_element_by_xpath(email_field).send_keys(email_text)

        time.sleep(1)
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        
        self.driver.find_element_by_xpath(pass_field).clear()
        self.driver.find_element_by_xpath(pass_field).send_keys(pass_text)
        time.sleep(1)
        
        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")

        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")
        
        time.sleep(1)
    
    def test_explore(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nTesting explore button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Explore)
            f.write("Found explore button, proceeding with test \n")
            button.click()
        except:
            f.write("explore button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_notify(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nTesting Notifications button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Notifications)
            f.write("Found Notifications button, proceeding with test \n")
            button.click()
        except:
            f.write("Notifications button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    
    def test_Messages(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nTesting Messages button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Messages)
            f.write("Found Messages button, proceeding with test \n")
            button.click()
        except:
            f.write("Messages button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_bookmark(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nBookmark button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.bookmark)
            f.write("Found Bookmark button, proceeding with test \n")
            button.click()
        except:
            f.write("Bookmark button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_lists(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nLists button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.lists)
            f.write("Found Lists button, proceeding with test \n")
            button.click()
        except:
            f.write("Lists button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_profile(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nprofile button \n")
        self.total_tests += 1
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.profile)
            f.write("Found profile button, proceeding with test \n")
            button.click()
        except:
            f.write("profile button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True
   
    def test_more(self):
        time.sleep(2)
        print("done sleeping")
        f.write("\nmore button \n")
        self.total_tests += 1
        self.driver.maximize_window()
        try:
            button = ""
            button = self.driver.find_element_by_xpath(Side_bar_Locators.more)
            f.write("Found more button, proceeding with test \n")
            button.click()
            #button.click()
            #button.click()
        except:
            f.write("more button not found aborting test \n")
            self.failed_tests += 1
            assert False

        try:
            self.driver.find_element_by_xpath(Side_bar_Locators.Settings_more).click()
        except:
            f.write("Couldn't find settings in more \n")
            assert False

        try:
            button = self.driver.find_element_by_xpath(Side_bar_Locators.Home_ident)
            f.write("we didn't move from home. Test failed \n")
            self.failed_tests += 1 
            assert False
        except:
            f.write("Moved from home, Test passed \n")
            self.pass_tests += 1
            assert True

    def test_Tweet_box(self):
        f.write("\nTest Sending a tweet from sidebar \n")
        time.sleep(2)
        tweet_box_element = None
        tweet_text = "Tweet from sidebar"
        
        try:
            tweet_box_element = self.driver.find_element_by_xpath(Side_bar_Locators.tweet_box)
            f.write("Found tweet box button in sidebar and clicked on it, proceeding with test\n")
            tweet_box_element.click()
        except:
            f.write("Couldn't find tweet box button, aborting test \n")
            assert False


        try:
            tweet_box_element = self.driver.find_element_by_xpath(Side_bar_Locators.tweet_box_itself)
            f.write("Found tweet dialog box, proceeding with test \n")
        except:
            f.write("Tweet box didn't find tweet dialog box, test aborted \n")
            assert False
        
        tweet_box_element.send_keys(tweet_text)
        f.write("Sent a tweet text to dialog box \n")

        time.sleep(3)

        try:
            el = self.driver.find_element_by_xpath(Side_bar_Locators.tweet_button_dialog)
            action = webdriver.common.action_chains.ActionChains(self.driver)
            action.move_to_element_with_offset(el, 80, 25)
            action.click()
            action.perform()
            f.write("Found tweet button in dialog box and clicked on it \n")
        except:
            f.write("Could not find button in dialog box, aborting test \n")
            assert False

        self.driver.refresh()

        f.write("Refreshed page \n")

        f.write("First tweet text matches sent text, Test passed \n")


    def test_logout(self):
        self.driver.maximize_window()
        time.sleep(2)
        scrolldown(self.driver,1)

        f.write("\nTesting logging out from side bar \n")
        log_sidebar = None

        try:
            log_sidebar = self.driver.find_element_by_xpath(Side_bar_Locators.logout_sidebar)
            f.write("Found three dotted button in sidebar, proceeding with test \n")
        except:
            f.write("could not find three dotted button in sidebar, test aborted \n")
            assert False
        
        log_sidebar.click()

        f.write("Clicked on three dotted button \n")

        log_but = None

        try:
            log_but = self.driver.find_element_by_xpath(Side_bar_Locators.logout_button)
            f.write("Found logout button, proceeding with test \n")
        except:
            f.write("could not find logout button, test aborted \n")
            assert False
        
        log_sidebar.click()

        f.write("Clicked on logout button\n")

        time.sleep(3)

        try:
            self.driver.find_element_by_xpath(sign_in)
            f.write("Moved back to starting page, Test passed \n")
            assert True
        except:
            f.write("Stayed on home, Test failed \n")
            assert False

    def tearDown(self):
        #f.write("Total tests run : " + str(self.total_tests)+"\n")
        #f.write("Total passed : " + str(self.pass_tests)+"\n")
        #f.write("Total failed : " + str(self.failed_tests)+"\n")
        #f.write("Percentage pass : " + str ((self.pass_tests*1.0 / self.total_tests)*100) + " % \n")
        self.driver.close()  


if __name__== "__main__":
    unittest.main()
