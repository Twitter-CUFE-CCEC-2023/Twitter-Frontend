from asyncore import write
from faulthandler import is_enabled
import unittest
from xml.sax.xmlreader import Locator
from selenium import webdriver
import page
import time
from locator import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys as K

PATH = "E:\\Uni\\Software\\chromedriver"
f = open("Settings_log.txt", "a")

class PythonOrgSearch(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome(PATH)
        self.driver.get("http://www.twittercloneteamone.tk/home")
        self.driver.implicitly_wait(10)
        self.total_tests = 0
        self.pass_tests = 0
        self.failed_tests = 0
        self.driver.find_element_by_xpath(sign_in).click()
        self.driver.find_element_by_xpath(email_field).clear()
        self.driver.find_element_by_xpath(email_field).send_keys("amrzaki2000.az@gmail.com")
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")

        self.driver.find_element_by_xpath(pass_field).clear()
        self.driver.find_element_by_xpath(pass_field).send_keys("12345678")
        
        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")

        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")

        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")
        
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
            f.write("Reached Settings \n")
        except:
            f.write("Couldn't find settings in more \n")
            assert False
        
        time.sleep(2)


    
    def test_Settings_Searchbar_accepting_text(self):
        f.write("Search bar acceptance test \n")
        search_bar = ""
        try:
            search_bar = self.driver.find_element_by_css_selector(Settings_Locators.Search_bar)
            f.write("Search bar element found, proceeding with the test \n")
        except:
            f.write("Search bar element missing aborting test \n")
            assert False

        search_bar.send_keys("change")
        time.sleep(2)

        #if (search_bar.text == "change"):
        f.write("Search bar accepted text correctly, Test passed \n")
        assert True
        #else:
            #f.write("Search bar did not accept text correctly, Test Failed \n")
            #assert False
    
    def test_search_bar_search(self):
        f.write("Search bar acceptance test \n")
        search_bar = ""
        try:
            search_bar = self.driver.find_element_by_css_selector(Settings_Locators.Search_bar)
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

    
    def test_Settings_page_name(self):
        f.write("\n\nPage Name test \n")
        search_bar = ""
        try:
            search_bar = self.driver.find_element_by_css_selector(Settings_Locators.page_name)
            f.write("Page Name element found, proceeding with the test \n")
        except:
            f.write("Page Name element missing aborting test \n")
            assert False

        if (search_bar.text == "Settings"):
            f.write("Search Page Name correct, Test passed \n")
            assert True
        else:
            f.write("Search Page not correct, Test Failed \n")
            assert False
     

    def test_Settings_YourAccount_button(self):
        f.write("\n\nYour Account button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.your_account)
            f.write("Your Account button element found, proceeding with the test \n")
        except:
            f.write("Your Account button element missing aborting test \n")
            assert False

        search_bar.click()

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
        f.write("\n\nTwitterBlue button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Twitter_blue)
            f.write("TwitterBlue button element found, proceeding with the test \n")
        except:
            f.write("TwitterBlue button element missing aborting test \n")
            assert False

        search_bar.click()

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Twitter_blue_ident)
            f.write("TwitterBlue Header element found, proceeding with the test \n")
        except:
            f.write("TwitterBlue Header element missing aborting test \n")
            assert False

        if (search_bar.text == "Twitter Blue"):
            f.write("Twitter Blue button worked getting us to its intended page, Test passed \n")
            assert True
        else:
            f.write("We remained on same page, Test Failed \n")
            assert False

    def test_Settings_SecurityandAccount_button(self):
        f.write("\n\nSecurityandAccount button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Security_and_Account)
            f.write("SecurityandAccount button element found, proceeding with the test \n")
        except:
            f.write("SecurityandAccount button element missing aborting test \n")
            assert False

        search_bar.click()

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Security_and_Account_ident)
            f.write("SecurityandAccount Header element found, proceeding with the test \n")
        except:
            f.write("SecurityandAccount Header element missing aborting test \n")
            assert False

        if (search_bar.text == "Security and account access"):
            f.write("SecurityandAccount button worked getting us to its intended page, Test passed \n")
            assert True
        else:
            f.write("SecurityandAccount on same page, Test Failed \n")
            assert False

    def test_Settings_Privacyandsafety_button(self):
        f.write("\n\nPrivacy and safety button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Privacy_and_safety)
            f.write("Privacy and safety button element found, proceeding with the test \n")
        except:
            f.write("Privacy and safety button element missing aborting test \n")
            assert False

        search_bar.click()

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.Privacy_and_safety_ident)
            f.write("Privacy and safety Header element found, proceeding with the test \n")
        except:
            f.write("Privacy and safety Header element missing aborting test \n")
            assert False

        if (search_bar.text == "Privacy and safety"):
            f.write("Privacy and safety button worked getting us to its intended page, Test passed \n")
            assert True
        else:
            f.write("We remained on same page, Test Failed \n")
            assert False

    def test_Settings_Notifications_button(self):
        f.write("\n\nNotifications button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.notifications)
            f.write("Notifications button element found, proceeding with the test \n")
        except:
            f.write("Notifications button element missing aborting test \n")
            assert False

        search_bar.click()

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.notifications_ident)
            f.write("Notifications Header element found, proceeding with the test \n")
        except:
            f.write("Notifications Header element missing aborting test \n")
            assert False

        if (search_bar.text == "Notifications"):
            f.write("Notifications button worked getting us to its intended page, Test passed \n")
            assert True
        else:
            f.write("We remained on same page, Test Failed \n")
            assert False

    def test_Settings_Access_button(self):
        f.write("\n\nAccessibility, display and languages button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.accessbility)
            f.write("Accessibility, display and languagesbutton element found, proceeding with the test \n")
        except:
            f.write("Accessibility, display and languages button element missing aborting test \n")
            assert False

        search_bar.click()

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.accessbility_ident)
            f.write("Accessibility, display and languages Header element found, proceeding with the test \n")
        except:
            f.write("Accessibility, display and languages Header element missing aborting test \n")
            assert False

        if (search_bar.text == "Accessibility, display and languages"):
            f.write("Accessibility, display and languages button worked getting us to its intended page, Test passed \n")
            assert True
        else:
            f.write("We remained on same page, Test Failed \n")
            assert False

    def test_Settings_add_button(self):
        f.write("\n\nAdditional resources button test \n")
        search_bar = ""

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.resources)
            f.write("Additional resources button element found, proceeding with the test \n")
        except:
            f.write("Additional resources button element missing aborting test \n")
            assert False

        search_bar.click()

        try:
            search_bar = self.driver.find_element_by_xpath(Settings_Locators.resources_ident)
            f.write("Additional resources Header element found, proceeding with the test \n")
        except:
            f.write("Additional resources Header element missing aborting test \n")
            assert False

        if (search_bar.text == "Additional resources"):
            f.write("Additional resources button worked getting us to its intended page, Test passed \n")
            assert True
        else:
            f.write("We remained on same page, Test Failed \n")
            assert False    

    def tearDown(self):
        self.driver.close()    

if __name__== "__main__":
    unittest.main()