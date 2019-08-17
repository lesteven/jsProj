#!/bin/bash


sudo -u postgres psql < createDB.sql
psql foo < createTable.sql
