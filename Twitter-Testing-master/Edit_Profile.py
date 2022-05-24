import email
from faulthandler import is_enabled
from lib2to3.pgen2 import driver
from pickle import TRUE
from unicodedata import name
import unittest
from xml.sax.xmlreader import Locator
from selenium import webdriver
#import page
import time
from locator import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

PATH = "/usr/bin/chromedriver"
f = open("Edit_Profile_log.txt", "a")

def reach_profile(driver,test_name):
        open_message = "\nTesting " + test_name + "\n"
        f.write(open_message)

        try:  # try to click on profile from sidebar
            driver.find_element_by_xpath(Edit_Profile_Locators.profile_side_bar).click()
            f.write("Successfully clicked on profile button \n")
            return True
        except:
            f.write("Failed to locate profile button from sidebar, aborting test \n")
            return False

def reach_edit_profile(driver):
        try: # try to click on edit profile from profile page
            driver.find_element_by_xpath(Edit_Profile_Locators.edit_profile_button).click()
            f.write("Successfully clicked on edit profile button \n")
            return True
        except:
            f.write("Failed to locate edit profile button, aborting test \n")
            return False



def delay():
    time.sleep(10)

class PythonOrgSearch(unittest.TestCase):
    
    
    def setUp(self):
        chromeOptions = webdriver.ChromeOptions() 

        chromeOptions.add_argument("--no-sandbox") 
        chromeOptions.add_argument("--disable-setuid-sandbox") 

        chromeOptions.add_argument("--headless");
        chromeOptions.add_argument("--remote-debugging-port=9230")  # this

        chromeOptions.add_argument("--disable-dev-shm-using") 
        chromeOptions.add_argument("--disable-extensions") 
        chromeOptions.add_argument("--disable-gpu") 
        chromeOptions.add_argument("start-maximized") 
        chromeOptions.add_argument("disable-infobars")
        chromeOptions.add_argument(r"user-data-dir=.\cookies\\test") 



        self.driver =  webdriver.Chrome(PATH,chrome_options=chromeOptions)
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

    
    def test_name_blank(self):

        continue_ = reach_profile(self.driver,"edit name leaving it blank")
        
        if continue_ == False:
            assert False

        continue_ = reach_edit_profile(self.driver)
        
        if continue_ == False:
            assert False

        name_box = None
        save = None

        try: # try to find name field
            name_box = self.driver.find_element_by_xpath(Edit_Profile_Locators.name_field)
            f.write("Successfully found name field \n")
        except:
            f.write("Failed to locate name field, aborting test \n")
            assert False
        
        for i in range(20):
            name_box.send_keys(Keys.BACK_SPACE)

        f.write("Cleared name field\n")
        time.sleep(3)

        try: # try to find save button
            save = self.driver.find_element_by_xpath(Edit_Profile_Locators.save_button)
            f.write("Successfully found save button \n")
        except:
            f.write("Failed to locate save button, aborting test \n")
            assert False

        save.click() # clicking on save
        f.write("Clicked on save button\n")
        time.sleep(2)

        try:
            self.driver.find_element_by_xpath(Edit_Profile_Locators.profile_page_identifier)
            f.write("Moved to profile page, save was not disabled, Test Failed\n")
            assert False
            return
        except:
            return
            #f.write("Remained on edit page, save was disabled, Test Passed\n")
            #assert True

    
    def test_name(self):

        name_change = "Amr Zaki"

        continue_ = reach_profile(self.driver,"edit name with new name")
        
        if continue_ == False:
            assert False


        continue_ = reach_edit_profile(self.driver)
        
        if continue_ == False:
            assert False

        name_box = None
        save = None

        try: # try to find name field
            name_box = self.driver.find_element_by_xpath(Edit_Profile_Locators.name_field)
            f.write("Successfully found on name field \n")
        except:
            f.write("Failed to locate name field, aborting test \n")
            assert False
        
        for i in range(20):
            name_box.send_keys(Keys.BACK_SPACE)

        name_box.send_keys(name_change)
        f.write("Sent new name\n")

        try: # try to find save button
            save = self.driver.find_element_by_xpath(Edit_Profile_Locators.save_button)
            f.write("Successfully found on save button \n")
        except:
            f.write("Failed to locate save button, aborting test \n")
            assert False

        save.click() # clicking on save
        f.write("Clicked on save button\n")

        try: # try to find which page we are on
            self.driver.find_element_by_xpath(Edit_Profile_Locators.profile_page_identifier)
            f.write("Moved back to profile page\n")
        except:
            f.write("Remained on edit profile, save was disabled, Test Failed \n")
            assert False
        
        new_name = None

        delay()

        try: # getting name
            new_name = self.driver.find_element_by_xpath(Edit_Profile_Locators.name_from_profile)
            f.write("Found new name \n")
        except:
            f.write("couldn't find new name, aborting test \n")
            assert False

        print(new_name.text + " <- new name \n")
        if (new_name.text == name_change):
            f.write("Name changed to entered name successfully, Test passed \n")
            assert True
        else:
            f.write("Name didn't change to entered name, Test Failed \n")
            assert False

    
    def test_bio(self):

        bio_change = "this is my new bio"

        continue_ = reach_profile(self.driver,"edit bio with new bio")
        
        if continue_ == False:
            assert False

        continue_ = reach_edit_profile(self.driver)
        
        if continue_ == False:
            assert False

        bio_box = None
        save = None

        try: # try to find name field
            bio_box = self.driver.find_element_by_xpath(Edit_Profile_Locators.bio_field)
            f.write("Successfully found bio field \n")
        except:
            f.write("Failed to locate bio field, aborting test \n")
            assert False
        
        for i in range(100):
            bio_box.send_keys(Keys.BACK_SPACE)
        bio_box.send_keys(bio_change)
        f.write("Sent new bio \n")

        try: # try to find save button
            save = self.driver.find_element_by_xpath(Edit_Profile_Locators.save_button)
            f.write("Successfully found on save button \n")
        except:
            f.write("Failed to locate save button, aborting test \n")
            assert False

        save.click() # clicking on save
        f.write("Clicked on save button\n")

        
        f.write("Moved back to profile page\n")
        
        new_bio = None

        delay()

        try: # getting bio
            new_bio = self.driver.find_element_by_xpath(Edit_Profile_Locators.bio_from_profile)
            f.write("Found new bio \n")
        except:
            f.write("couldn't find new bio, aborting test \n")
            assert False

        if (new_bio.text == bio_change):
            f.write("Bio changed to entered bio successfully, Test passed \n")
            assert True
        else:
            f.write("Bio didn't change to entered bio, Test Failed \n")
            assert False


    def test_image(Self):
        f.write("\nTesting changing profile image\n")
        f.write("Image didn't change\n")
        assert False
    
    

    def tearDown(self):
        #f.write("Total tests run : " + str(self.total_tests)+"\n")
        #f.write("Total passed : " + str(self.pass_tests)+"\n")
        #f.write("Total failed : " + str(self.failed_tests)+"\n")
        #f.write("Percentage pass : " + str ((self.pass_tests*1.0 / self.total_tests)*100) + " % \n")
        self.driver.close()  


if __name__== "__main__":
    unittest.main()
