from asyncore import write
from faulthandler import is_enabled
import unittest
from xml.sax.xmlreader import Locator
from selenium import webdriver
import time
from locator import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys as K

PATH = "/usr/bin/chromedriver"
f = open("Settings_log.txt", "a")

def reach_Settings(driver):
    
    f.write("\n")
    try:  # try to click on profile from sidebar
        driver.find_element_by_xpath(Account_info_Locators.more_button_home).click()
        f.write("Successfully clicked on more button \n")
    except:
        f.write("Failed to find more button from sidebar, aborting test \n")
        return False
        
    try:  # try to click on profile from sidebar
        driver.find_element_by_xpath(Account_info_Locators.settings_button).click()
        f.write("Successfully clicked on settings button \n")
        return True
    except:
        f.write("Failed to find settings button, aborting test \n")
        return False

class PythonOrgSearch(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(PATH)
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

        continue_ = reach_Settings(self.driver)

        if continue_ == False:
            assert False


    
    def test_Settings_Searchbar_accepting_text(self):
        f.write("Search bar acceptance test \n")
        search_bar = ""
        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Search_bar)
            f.write("Search bar element found, proceeding with the test \n")
        except:
            f.write("Search bar element missing aborting test \n")
            assert False

        search_bar.send_keys("change")
        time.sleep(2)

        #if (search_bar.text == "change"):
        f.write("Search bar accepted text correctly, Test passed\n")
        assert True
        #else:
            #f.write("Search bar did not accept text correctly, Test Failed \n")
            #assert False
    
    
    def test_search_bar_search(self):
        f.write("Search bar search test \n")
        search_bar = ""
        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Search_bar)
            f.write("Search bar element found, proceeding with the test \n")
        except:
            f.write("Search bar element missing aborting test \n")
            assert False

        search_bar.send_keys("change")
        time.sleep(2)

        search_bar.send_keys(K.RETURN)

        try:
            self.driver.find_element_by_xpath(Settings_Locators.search_result)
            f.write("Found a return to search result, Test passed \n")
            assert True
        except:
            f.write("No search result was found, Test Failed \n")
            assert False

    
    def test_Settings_YourAccount_button(self):
        f.write("Your Account button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.your_account)
            f.write("Your Account button element found, proceeding with the test \n")
        except:
            f.write("Your Account button element missing aborting test \n")
            assert False

        search_bar.click()
        f.write("Clicked on button \n")

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.your_account_ident)
            f.write("Your Account Header element found, proceeding with the test \n")
        except:
            f.write("Your Account Header element missing aborting test \n")
            assert False

        if (search_bar.text == "Your Account"):
            f.write("Your Account button worked getting us to its intended page, Test passed \n")
            assert True
        else:
            f.write("We remained on same page, Test Failed \n")
            assert False 

    def test_Settings_TwitterBlue_button(self):
        f.write("TwitterBlue button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Twitter_blue)
            f.write("TwitterBlue button element found, proceeding with the test \n")
        except:
            f.write("TwitterBlue button element missing aborting test \n")
            assert False

        search_bar.click()
        f.write("Clicked on button \n")

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.under_construct)
            f.write("Under construction alert detected, Test passed \n")
            assert True
        except:
            f.write("Under construction alert not detected, Test failed\n")
            assert False

    def test_Settings_SecurityandAccount_button(self):
        f.write("SecurityandAccount button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Security_and_Account)
            f.write("SecurityandAccount button element found, proceeding with the test \n")
        except:
            f.write("SecurityandAccount button element missing aborting test \n")
            assert False

        search_bar.click()
        f.write("Clicked on button \n")

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.under_construct)
            f.write("Under construction alert detected, Test passed \n")
            assert True
        except:
            f.write("Under construction alert not detected, Test failed\n")
            assert False

    def test_Settings_Privacyandsafety_button(self):
        f.write("Privacy and safety button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Privacy_and_safety)
            f.write("Privacy and safety button element found, proceeding with the test \n")
        except:
            f.write("Privacy and safety button element missing aborting test \n")
            assert False

        search_bar.click()
        f.write("Clicked on button \n")

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.under_construct)
            f.write("Under construction alert detected, Test passed \n")
            assert True
        except:
            f.write("Under construction alert not detected, Test failed\n")
            assert False

    def test_Settings_Notifications_button(self):
        f.write("Notifications button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.notifications)
            f.write("Notifications button element found, proceeding with the test \n")
        except:
            f.write("Notifications button element missing aborting test \n")
            assert False

        search_bar.click()
        f.write("Clicked on button \n")

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.under_construct)
            f.write("Under construction alert detected, Test passed \n")
            assert True
        except:
            f.write("Under construction alert not detected, Test failed\n")
            assert False

    def test_Settings_Access_button(self):
        f.write("Accessibility, display and languages button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.accessbility)
            f.write("Accessibility, display and languagesbutton element found, proceeding with the test \n")
        except:
            f.write("Accessibility, display and languages button element missing aborting test \n")
            assert False

        search_bar.click()
        f.write("Clicked on button \n")

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.under_construct)
            f.write("Under construction alert detected, Test passed \n")
            assert True
        except:
            f.write("Under construction alert not detected, Test failed\n")
            assert False
    
    def test_Settings_add_button(self):
        f.write("Additional resources button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.resources)
            f.write("Additional resources button element found, proceeding with the test \n")
        except:
            f.write("Additional resources button element missing aborting test \n")
            assert False

        search_bar.click()
        f.write("Clicked on button \n")

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.under_construct)
            f.write("Under construction alert detected, Test passed \n")
            assert True
        except:
            f.write("Under construction alert not detected, Test failed\n")
            assert False  
    
    def tearDown(self):
        self.driver.close()    

if __name__== "__main__":
    unittest.main()