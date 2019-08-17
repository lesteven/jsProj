#!/bin/bash


cd "($dirname "$0")"

cqlsh < createKeyspace.cql
cqlsh < createTable.cql
